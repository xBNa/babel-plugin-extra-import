//TODO 传到npm上实现共用
export default function ({types: t}) {
    const Program = {
        enter (path,  {opts = {}}) {
            console.log(opts)
        }
    }
    const plugin = {
        visitor: {
            Program
        }
    }
    return plugin
}
