import CheckEmailMiddleware from "./middlewares/CheckEmailMiddleware";
import CheckPasswordMiddleware from "./middlewares/CheckPasswordMiddleware";
import CheckPermissionMiddleware from "./middlewares/CheckPermissionMiddleware";
import CheckUserMiddleware from "./middlewares/CheckUserMiddleware";
import Server from "./servers/Server";
import * as readLine from "readline";

declare var process;

const server = new Server();

function setPromptQuestions(){
    const rl = readLine.createInterface({input: process.stdin, output: process.stdout});
    rl.question("Digite o email: ", email => {
        rl.question("Digite a senha: ", password => {
            server.logIn(email, password);
            rl.close();
        });
    });
    rl.on("close", () => setPromptQuestions());
}

const emailMiddleware = new CheckEmailMiddleware();
const userMiddleware = new CheckUserMiddleware();
const passwordMiddleware = new CheckPasswordMiddleware();
const permissionMiddleware = new CheckPermissionMiddleware();

userMiddleware.linkWith(permissionMiddleware);
passwordMiddleware.linkWith(userMiddleware);
emailMiddleware.linkWith(passwordMiddleware);

server.setMiddleware(emailMiddleware);

setPromptQuestions();