function capitalizeWordsWithPrefix(str, prefix) {
    // const capitalizedStr = str
    //     .replace(/-/g, " ")
    //     .split(" ")
    //     .map(
    //         (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() // Capitalize each word
    //     )
    //     .join("");

    return prefix + str;
}

export default capitalizeWordsWithPrefix;
