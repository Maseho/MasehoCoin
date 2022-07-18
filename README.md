# WAWFEGAG - Project solution

## Welcome! 👋

Thanks for checking out my solution for the project. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
 
## Overview

### The challenge

Users should be able to:

- Add a block to the chain

### Screenshot

![](./screenshot.jpg)


## My process

### Built with

- JavaScript


### What I learned

I learned how blockchain technolgy works, the advantages and disadvantages of blockchain technology, the real life applications of blockchain and how to build a simple blockchain.

```js
 mineBlock(difficulty){
        while (this.hash.substring(0, difficulty) !== Array(difficulty - 1).join("0")){
           this.nonce++;
            this.hash = this.calculateHash();
          }
    }
```


### Continued development

- More Web 3 concepts 
