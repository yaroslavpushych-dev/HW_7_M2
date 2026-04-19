function createLogger(prefix) {
    return function strLogger(message) {
        console.log(`${prefix}: ${message}`)
    }
}

const authLogger = createLogger('AUTH');
const apiLogger = createLogger('API');

authLogger('User logged in');
apiLogger('Request failed');

// ---------------------------------

function createLimiter(limit) {
    if (typeof limit !== 'number' ||
        limit < 0 ||
        !Number.isFinite(limit)
    ) return function () {
        return "Error";
    };

    let count = 0;

    return function () {
        if(count < limit) {
            count++;
            return "Ok";
        }
        return "Error";
    }
}

const limited = createLimiter(2);

console.log(limited());
console.log(limited());
console.log(limited());