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
    // userCopy.hair=u.hair/power
    return {
        ...u,
        hair: u.hair / power
    }
}

export function moveUser(u: UserWithLaptopType, city: string) {
    // userCopy.address = {
    //     ...userCopy.address,
    //     city:"Paris"
    // }
    return {
        ...u,
        address: {
            ...u.address,
            city: city
        }
    }
}

export function updateLaptop(u: UserWithLaptopType, title: string) {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: title
        }
    }
}

export function moveToStreet(u: UserWithLaptopType, street: string) {
    return {
        ...u,
        address: {
            ...u.address,
            street: street
        }
    }
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

export function updateBook(u: UserWithBooksType, oldBook:string,newBook:string) {
    const userCopy = {
        ...u,
        books: u.books.map(b=> b===oldBook?newBook:b)
    }

    return userCopy
}
