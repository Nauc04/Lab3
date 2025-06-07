function toCamelCase(snakeCase) {
    return snakeCase.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
}
console.log(toCamelCase("my_variable"));         // 👉 myVariable
console.log(toCamelCase("new_brand_product"));   // 👉 newBrandProduct
console.log(toCamelCase("example_case_test"));   // 👉 exampleCaseTest
