function toSnakeCase(camelCase) {
    return camelCase.replace(/([A-Z])/g, '_$1').toLowerCase();
}

console.log(toSnakeCase("myVariable"));         // 👉 my_variable
console.log(toSnakeCase("newBrandProduct"));    // 👉 new_brand_product
console.log(toSnakeCase("exampleCaseTest"));    // 👉 example_case_test
