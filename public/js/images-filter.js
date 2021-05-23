
const imageNames = [
    `sms`,
    `web-cross-platform`,
    `brunlees-court`,
    `charlotte-court`,
    `checking-account-technologies`,
    `indexing-application`,
    `infomediaries-row`,
    `protocol-virginia`,
    `summit`,
    `virtual-fantastic-granite`,
    `new-caledonia-invoice`,
    `architect`
]

export const compareImageNmaes = (dataElement) => {
    // console.log(`dataElement`, dataElement)
    const dataToLowerCase = dataElement.toLowerCase().replace(/-/g, ` `);
    // console.log(`dataToLowerCase`, dataToLowerCase)
    return imageNames.filter((image) => {
        const nameWithoutHyphen = image.replace(/-/g, ` `);
        // console.log(`nameWithoutHyphen`, nameWithoutHyphen)
        return nameWithoutHyphen === dataToLowerCase
    })
}
