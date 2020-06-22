import React from "react";
import { OpenDirOptions } from "fs";

interface Shape {
    color: string
}

interface Square extends Shape{
    name: string
}
let square = {} as Square;

square.color = 'rr';
square.name = '333'
export default Shape;


class Control {
    private state: any;
    private select1() : void {
        console.log(111);
    }
}

interface SelectableControl extends Control {
    select(): void;
}

const a : SelectableControl = {
    state: 2,
    select: () => {
        console.log(2222);
    },
    select1: () => {

    }
}