import * as hapi from "hapi";

const server: hapi.Server = new hapi.Server();
server.connection({ port: 3000 });

interface Exam {
    sid: string;
    name: string;
    duration: number;
}

async function getExam(): Promise<Exam>{
    return {
        sid: "as",
        name: "sad",
        duration: 12
    }
}

/**
 * @param reply
 * @returns {Promise<any>}
 */
async function sendReply(reply: Function): Promise<any> {
    const exam: Exam = await getExam();
    reply(exam);
}

server.route({
    method: "GET",
    path: "/",
    handler: (request: hapi.Request, reply: hapi.Base_Reply) => {
        sendReply(reply);
    }

});

server.start((err) => {
    if (err) {
        throw err;
    }
    console.log("server running at 3000");
});
