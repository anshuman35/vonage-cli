/// <reference path="../node_modules/@vonage/server-sdk/typings/index.d.ts" />
import Command, { flags } from '@oclif/command'
import * as Vonage from '@vonage/server-sdk';
import * as fs from 'fs-extra'
import * as path from 'path'

export default abstract class extends Command {
    private _vonage!: any
    private _apiKey: string
    private _apiSecret: string
    private _userConfig: any

    static flags = {
        help: flags.help({ char: 'h' }),
        apiKey: flags.string({ hidden: true, dependsOn: ['apiSecret'] }),
        apiSecret: flags.string({ hidden: true, dependsOn: ['apiKey'] })
    }

    get vonage() {
        if (this._vonage) return this._vonage

        this._vonage = new Vonage({
            apiKey: this._apiKey,
            apiSecret: this._apiSecret
        })

        // console.log(this._vonage)

        return this._vonage
    }

    get userConfig() {
        return this._userConfig;
    }

    promisify(method, data) {
        console.log(method.toString())
        return new Promise((res, rej) => {
            method.call(data, (error: any, response: any) => {
                if (error) {
                    console.log(error, null, 4)
                    rej(error)
                } else {
                    console.log(error, null, 4)
                    res(response)
                }
            })
        })
    }

    async init() {
        const { flags } = this.parse(Command)
        this._userConfig = await fs.readJSON(path.join(this.config.configDir, 'vonage.config.json'))

        // creds priority order -- flags > env > config
        if (flags.apiKey && flags.apiKey) {
            this._apiKey = flags.apiKey;
            this._apiSecret = flags.apiSecret;
        } else if (process.env.VONAGE_API_KEY && process.env.VONAGE_API_SECRET) {
            this._apiKey = process.env.VONAGE_API_KEY;
            this._apiSecret = process.env.VONAGE_API_SECRET;
        } else {
            this._apiKey = this._userConfig.apiKey;
            this._apiSecret = this._userConfig.apiSecret;
        }

    }


    async catch(error: any) {
        if (error.statusCode === 401) {
            console.warn('Authentication Error: Invalid Credentials');
        }

        if (error.oclif?.exit === 0) return;
        return super.catch(error);
    }
}