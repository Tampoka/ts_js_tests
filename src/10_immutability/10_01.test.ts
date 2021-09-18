import {
    addBooks, addCompany, CompanyType,
    makeHairCut,
    moveToStreet,
    moveUser, removeBook, updateBook, updateCompanyTitle, updateCompanyTitle2,
    updateLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, WithCompaniesType
} from "./10_01";

test('immutable change test', () => {
    const user = {
        name: "Alex",
        hair: 32,
        address: {
            city: "London"
        }
    }
    const awesomeUser = makeHairCut(user, 2)
    expect(user.hair).toBe(32)
    expect(awesomeUser.hair).toBe(16)
    expect(awesomeUser.address).toBe(user.address)
})


test('change address', () => {
    let user: UserWithLaptopType = {
        name: "Alex",
        hair: 32,
        address: {
            city: "London",
            street: "Central str."
        },
        laptop: {
            title: "ZenBook"
        }
    }
    const movedUser = moveUser(user, "Paris")

    expect(movedUser.laptop).toEqual({title: "ZenBook"})
    expect(user.address).toEqual({city: "London", street: "Central str."})
    expect(movedUser.address).toEqual({city: "Paris", street: "Central str."})
    expect(movedUser.address).not.toBe(user.address)
})
test('update laptop', () => {
    let user: UserWithLaptopType = {
        name: "Alex",
        hair: 32,
        address: {
            city: "London",
            street: "Central str."
        },
        laptop: {
            title: "ZenBook"
        }
    }
    const userWithUpdatedLaptop = updateLaptop(user, "MacBook Air Pro")

    expect(userWithUpdatedLaptop.laptop).toEqual({title: "MacBook Air Pro"})
    expect(user.laptop.title).toBe("ZenBook")
    expect(userWithUpdatedLaptop.laptop).not.toBe(user.laptop)
    expect(userWithUpdatedLaptop.laptop.title).toBe("MacBook Air Pro")
})
test('change street', () => {
    let user: UserWithLaptopType = {
        name: "Alex",
        hair: 32,
        address: {
            city: "London",
            street: "Central str."
        },
        laptop: {
            title: "ZenBook"
        }
    }
    const userMovedToStreet = moveToStreet(user, "Holiday street")

    expect(userMovedToStreet.address.street).toBe("Holiday street")
    expect(user.address.street).toBe("Central str.")
    expect(userMovedToStreet.address).not.toEqual(user.address)
    expect(userMovedToStreet.laptop.title).toBe("ZenBook")
})

test('add books', () => {
    let user: UserWithBooksType = {
        name: "Alex",
        hair: 32,
        address: {
            city: "London",
            street: "Central str."
        },
        laptop: {
            title: "ZenBook"
        },
        books: ["html", "css", "js", "react"]
    }
    const reader = addBooks(user, ["ts", "oop", "angular", "rest api"])

    expect(reader.books.length).toBe(8)
    expect(reader.books[4]).toBe("ts")
    expect(reader.books[7]).toBe("rest api")
    expect(user.books.length).toBe(4)
    expect(reader.address).toEqual(user.address)
    expect(reader.laptop).toEqual(user.laptop)
})

test('update react book', () => {
    let user: UserWithBooksType = {
        name: "Alex",
        hair: 32,
        address: {
            city: "London",
            street: "Central str."
        },
        laptop: {
            title: "ZenBook"
        },
        books: ["html", "css", "js", "react"]
    }
    const updatedReader = updateBook(user, "react", "algorithms")

    expect(updatedReader.books.length).toBe(4)
    expect(updatedReader.books[3]).toBe("algorithms")
    expect(user.books.length).toBe(4)
    expect(updatedReader.address).toEqual(user.address)
    expect(updatedReader.laptop).toEqual(user.laptop)
})

test('remove html book', () => {
    let user: UserWithBooksType = {
        name: "Alex",
        hair: 32,
        address: {
            city: "London",
            street: "Central str."
        },
        laptop: {
            title: "ZenBook"
        },
        books: ["html", "css", "js", "react"]
    }
    const updatedReader = removeBook(user, "html")

    expect(updatedReader.books.length).toBe(3)
    expect(updatedReader.books[3]).toBeUndefined()
    expect(user.books.length).toBe(4)
    expect(updatedReader.address).toEqual(user.address)
    expect(updatedReader.laptop).toEqual(user.laptop)
})
test('add company', () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: "Alex",
        hair: 32,
        address: {
            city: "London",
            street: "Central str."
        },
        laptop: {
            title: "ZenBook"
        },
        companies: [
            {id: 1, title: "Epam"},
            {id: 2, title: "IT-Incubator"},
            {id: 3, title: "Every Front"}
        ]
    }
    const addedCompanyUser = addCompany(user, {id: 4, title: "Google"})

    expect(addedCompanyUser.companies.length).toBe(4)
    expect(addedCompanyUser.companies[3]).toEqual({id: 4, title: "Google"})
    expect(addedCompanyUser.address).toEqual(user.address)
    expect(addedCompanyUser.laptop).toEqual(user.laptop)
})

test('update company title', () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: "Alex",
        hair: 32,
        address: {
            city: "London",
            street: "Central str."
        },
        laptop: {
            title: "ZenBook"
        },
        companies: [
            {id: 1, title: "Epam"},
            {id: 2, title: "IT-Incubator"},
            {id: 3, title: "Every Front"}
        ]
    }
    const updatedCompanyUser = updateCompanyTitle(user, 1, "Epam International") as UserWithLaptopType & WithCompaniesType

    expect(updatedCompanyUser.companies.length).toBe(3)
    expect(updatedCompanyUser.companies[0].title).toBe("Epam International")
    expect(updatedCompanyUser.companies[0]).toEqual({id: 1, title: "Epam International"})
    expect(updatedCompanyUser.address).toEqual(user.address)
    expect(updatedCompanyUser.laptop).toEqual(user.laptop)
})

test('update company name in associative array',()=>{
    const companies:{[key:string]:Array<CompanyType>}={
        ["Bob"]:[
            {id: 1, title: "Epam"},
            {id: 2, title: "IT-Incubator"},
            {id: 3, title: "Every Front"}
        ],
        ["John"]:[
            {id: 1, title: "Frontev"},
            {id: 2, title: "IT-Incubator"},

        ]
    }
    const updatedCompanies=updateCompanyTitle2(companies,"John",1,"Google")

    expect(updatedCompanies).not.toBe(companies)
    expect(updatedCompanies["John"][0]).toEqual({id: 1, title: "Google"})
})