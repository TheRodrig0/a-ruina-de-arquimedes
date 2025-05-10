import { defineConfig } from 'vite';

const phasermsg = () => {
    return {
        name: 'phasermsg',
        buildStart() {
            process.stdout.write(`Building for production...\n`);
        },
        buildEnd() {
            const line = "---------------------------------------------------------";
            const msg = `❤️❤️❤️ Tell us about your game! - games@phaser.io ❤️❤️❤️`;
            process.stdout.write(`${line}\n${msg}\n${line}\n`);
            process.stdout.write(`✨ Done ✨\n`);
        },
    };
};

export default defineConfig({
    base: '/a-ruina-de-arquimedes/', // Certifique-se de que o nome do repositório está correto
    logLevel: 'warning',
    build: {
        outDir: 'docs', // Define a pasta de saída como "docs"
        rollupOptions: {
            output: {
                manualChunks: {
                    phaser: ['phaser'], // Divide o Phaser em um chunk separado
                },
            },
        },
        minify: 'terser',
        terserOptions: {
            compress: {
                passes: 2,
            },
            mangle: true,
            format: {
                comments: false,
            },
        },
    },
    server: {
        port: 8080, // Porta do servidor de desenvolvimento
    },
    plugins: [phasermsg()],
});
