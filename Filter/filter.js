const customers = [
    {
    name: 'Mario', 
    phone: '996129909', 
    username: 'Doncel'
    },
    {
    name: 'Mariana', 
    phone: '996929909', 
    username: 'Doncel'
    },
    {
    name: 'Mariana', 
    phone: '996929909', 
    username: 'Mazetto'
    },
]

function filterCustomer(filters) {
    let findedCustomer = true
    return customers.filter((customer) => {
        Object.keys(filters).forEach(key => {
            if(key && !customer[key].includes(filters[key])) findedCustomer = false
        })
        return findedCustomer
    })
}

console.log(filterCustomer({username:'Doncel'}))
