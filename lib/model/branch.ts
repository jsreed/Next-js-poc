import Leaf from "./leaf";


export default interface Branch {
    id: string
    childBranches: Branch[]
    leafs: Leaf[]
}