import BaseCommand from '@vonage/cli-utils';


export default abstract class ConversationsCommand extends BaseCommand {
    static flags = {
        ...BaseCommand.flags,
    };

    static args = [
        ...BaseCommand.args,
    ];

    async getAllUsers(opts): Promise<any> { return opts }
    async getUserById(id): Promise<any> { return id }
    async createUser(opts): Promise<any> { return opts }
    async updateUser(opts): Promise<any> { return opts }
    async deleteUser(id): Promise<any> { return id }

}