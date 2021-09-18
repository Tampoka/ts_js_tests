export type UserType = {
    name: string
    hair: number
    address: {
        city: string
        street?: string
    }
}
export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserWithLaptopType & {
    books: Array<string>
}

export function makeHairCut(u: UserType, power: number) {
    const userCopy = {
        ...u,
        hair: u.hair / power
    }
    // userCopy.hair=u.hair/power
    return userCopy
}

export function moveUser(u: UserWithLaptopType, city: string) {
    const userCopy = {
        ...u,
        address: {
            ...u.address,
            city: city
        }
    }

    // userCopy.address = {
    //     ...userCopy.address,
    //     city:"Paris"
    // }
    return userCopy
}

export function updateLaptop(u: UserWithLaptopType, title: string) {
    const userCopy = {
        ...u,
        laptop: {
            ...u.laptop,
            title: title
        }
    }

    return userCopy
}

export function moveToStreet(u: UserWithLaptopType, street: string) {
    const userCopy = {
        ...u,
        address: {
            ...u.address,
            street: street
        }
    }

    return userCopy
}

export function addBooks(u: UserWithBooksType, newBooks: Array<string>) {
    const userCopy = {
        ...u,
        books: [
            ...u.books,
            ...newBooks
        ]
    }

    return userCopy
}