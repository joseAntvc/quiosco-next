export function formatCurrency(amount: number) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount)
}

export function getImagePath(imagePath: string){
    const cloudinnaryBaseUrl = 'https://res.cloudinary.com'
    if(imagePath.startsWith(cloudinnaryBaseUrl)){
        return imagePath
    } else {
        return `/products/${imagePath}.jpg`
    }
}

export function getImageNav(imagePath: string){
    const cloudinnaryBaseUrl = 'https://res.cloudinary.com'
    if(imagePath.startsWith(cloudinnaryBaseUrl)){
        return imagePath
    } else {
        return `/icon_${imagePath}.svg`    
    }
}

