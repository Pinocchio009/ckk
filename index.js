class animals {
    numberOfEyes = 2

   isColdBlooded(){
    console.log('i am cold blooded')

   }
   isWarmBlooded(){
    console.log('i am warmblooded')
   }
}


class vertebrae extends animals {
    hasBackbone = true
}

const fish = new vertebrae()
fish.isColdBlooded()

console.log(fish.hasBackbone)

const amphibia = new vertebrae()
amphibia.isColdBlooded()

console.log(amphibia.hasBackbone)

const reptiles = new vertebrae()
reptiles.isColdBlooded()
console.log(reptiles.hasBackbone)

const aves = new vertebrae()
aves.isWarmBlooded()

console.log(aves.hasBackbone)

const mammals = new vertebrae()
mammals.isWarmBlooded()
console.log(mammals.hasBackbone)

class invertebrae extends animals{
    hasBackbone = false
}
const athropoda = new invertebrae()
athropoda.isColdBlooded()
console.log(athropoda.hasBackbone)