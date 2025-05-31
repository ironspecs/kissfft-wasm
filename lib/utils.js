export function sleep(time) {
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, time);
    });
}
//# sourceMappingURL=utils.js.map