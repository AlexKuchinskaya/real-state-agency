
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
    const dataToLowerCase = dataElement.toLowerCase().replace(/-/g, ` `);
    return imageNames.filter((image) => {
        const nameWithoutHyphen = image.replace(/-/g, ` `);
        return nameWithoutHyphen === dataToLowerCase
    })
}
