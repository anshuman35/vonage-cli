import { OutputFlags } from '@oclif/parser';
import ConversationCommand from '../../../../conversations_base';

export default class ConversationMemberAdd extends ConversationCommand {
    static description = ""

    static examples = [
    ]

    static flags: OutputFlags<typeof ConversationCommand.flags> = {
        ...ConversationCommand.flags
    }

    async run() {
        this.addMemberToConversation();
    }
}
// requires convo id
// request
// {
//     "state": "invited",
//     "user": {
//       "id": "USR-82e028d9-5201-4f1e-8188-604b2d3471ec",
//       "name": "my_user_name"
//     },
//     "channel": {
//       "type": "phone",
//       "leg_id": "a595959595959595995",
//       "from": "string",
//       "to": "string",
//       "leg_ids": [
//         {
//           "leg_id": "a595959595959595995"
//         }
//       ]
//     },
//     "media": {
//       "audio_settings": {
//         "enabled": false,
//         "earmuffed": false,
//         "muted": false
//       }
//     },
//     "knocking_id": "a972836a-450f-35fa-156c-52a2ab5b7d25",
//     "member_id_inviting": "MEM-63f61863-4a51-4f6b-86e1-46edebio0391"
//   }

// response
// {
//     "id": "MEM-63f61863-4a51-4f6b-86e1-46edebio0391",
//     "conversation_id": "CON-d66d47de-5bcb-4300-94f0-0c9d4b948e9a",
//     "_embedded": {
//       "user": {
//         "id": "USR-82e028d9-5201-4f1e-8188-604b2d3471ec",
//         "name": "my_user_name",
//         "display_name": "My User Name",
//         "_links": {
//           "self": {
//             "href": "https://api.nexmo.com/v0.3/users/USR-82e028d9-5201-4f1e-8188-604b2d3471ec"
//           }
//         }
//       }
//     },
//     "state": "INVITED",
//     "timestamp": {
//       "invited": "2020-01-01T14:00:00.00Z",
//       "joined": "2020-01-01T14:00:00.00Z",
//       "left": "2020-01-01T14:00:00.00Z"
//     },
//     "initiator": {
//       "joined": {
//         "isSystem": true,
//         "user_id": "USR-82e028d9-5201-4f1e-8188-604b2d3471ec",
//         "member_id": "MEM-63f61863-4a51-4f6b-86e1-46edebio0391"
//       }
//     },
//     "channel": {
//       "type": "phone",
//       "leg_id": "a595959595959595995",
//       "from": "string",
//       "to": "string",
//       "leg_ids": [
//         {
//           "leg_id": "a595959595959595995"
//         }
//       ]
//     },
//     "media": {
//       "audio_settings": {
//         "enabled": false,
//         "earmuffed": false,
//         "muted": false
//       }
//     },
//     "_links": {
//       "href": "https://api.nexmo.com/v0.3/conversations/CON-63f61863-4a51-4f6b-86e1-46edebio0391/members/MEM-63f61863-4a51-4f6b-86e1-46edebio0391"
//     }
//   }