"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const node_path_1 = __importDefault(require("node:path"));
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        preflightContinue: false,
        optionsSuccessStatus: 204,
    });
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.useStaticAssets(node_path_1.default.join(__dirname, '..', '..', 'public'));
    app.setBaseViewsDir(node_path_1.default.join(__dirname, '..', '..', 'views'));
    app.setViewEngine('ejs');
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Mikulas API')
        .setDescription('API documentation for Mikulas Backend')
        .setVersion('1.0')
        .addTag('children', 'Children management endpoints')
        .addTag('toys', 'Toys management endpoints')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
//# sourceMappingURL=main.js.map