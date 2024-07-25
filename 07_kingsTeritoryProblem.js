// is is all about Scope 

let king='John'
if (true) {
    let king='Sam'

    if (true) {
        // It just look inside its scope Sam will be taken as king in absense of ram
        let king='Ram'
        console.log(king);
    }
}
if (true) {
    console.log("Iam second part"+king);
}
