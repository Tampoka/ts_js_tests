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

export type WithCompaniesType = {
    companies: Array<CompanyType>
}

export type CompanyType = {
    id: number
    title: string
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
    return {
        ...u,
        books: [
            ...u.books,
            ...newBooks
        ]
    }
}


export function updateBook(u: UserWithBooksType, oldBook: string, newBook: string) {
    return {
        ...u,
        books: u.books.map(b => b === oldBook ? newBook : b)
    }
}

export function removeBook(u: UserWithBooksType, bookForDelete: string) {
    return {
        ...u,
        books: u.books.filter(b => b !== bookForDelete)
    }
}

export function addCompany(u: UserWithLaptopType & WithCompaniesType, newCompany: { id: number, title: string }) {
    return {
        ...u,
        companies: [
            ...u.companies,
            newCompany
        ]
    }
}

export function updateCompanyTitle(u: WithCompaniesType, companyId: number, newTitle: string) {
    return {
        ...u,
        companies: u.companies.map(c =>
            c.id === companyId ?
                {...c, title: newTitle}
                : c)
    }
}

export function updateCompanyTitle2(obj: { [key: string]: Array<CompanyType> }, userName: string, companyId: number, newTitle: string) {

     return {
        ...obj,
        [userName]: obj[userName].map(c =>
            c.id === companyId ?
                {...c, title: newTitle}
                : c)
    }

    /** let copy={...obj}
     copy[userName]=obj[userName].map((c)=>{
        if (c.id===companyId){
            return {...c,title:newTitle}
        }
        else {
            return c
        }
    })
     return copy **/
}