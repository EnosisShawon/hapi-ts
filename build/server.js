"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const hapi = require("hapi");
const server = new hapi.Server();
server.connection({ port: 3000 });
function getExam() {
    return __awaiter(this, void 0, void 0, function* () {
        return {
            sid: "as",
            name: "sad",
            duration: 12
        };
    });
}
/**
 * @param reply
 * @returns {Promise<any>}
 */
function sendReply(reply) {
    return __awaiter(this, void 0, void 0, function* () {
        const exam = yield getExam();
        reply(exam);
    });
}
server.route({
    method: "GET",
    path: "/",
    handler: (request, reply) => {
        sendReply(reply);
    }
});
server.start((err) => {
    if (err) {
        throw err;
    }
    console.log("server running at 3000");
});
//# sourceMappingURL=server.js.map