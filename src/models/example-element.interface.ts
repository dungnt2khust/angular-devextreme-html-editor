import { Father } from "./father.interface";
import { Child } from "./child.interface";

export interface ExampleElement {
  father: Father;
  selectedChild: Child;
  selectableChildren: Child[]
}
