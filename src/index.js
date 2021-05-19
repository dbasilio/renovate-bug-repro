const { someFunction } = require('@private-registry/my-package')

function main() {
    if (!someFunction()) {
        throw new Error('Uh Oh')
    }
    console.log("Things look good!")
}

main()
