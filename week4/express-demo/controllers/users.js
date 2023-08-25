const users = [
    { firstName: "Reimu",  lastName: "Hakurei"    },
    { firstName: "Marisa", lastName: "Kirisame"   },
    { firstName: "Sanae",  lastName: "Kochiya"    },
    { firstName: "Sakuya", lastName: "Izayoi"     },
    { firstName: "Momiji", lastName: "Inubashiri" }
];

module.exports = {
    getAll: (req, res) => {
        res.json( users )
    },

    greeting: (req, res) => {
        res.json({message: "Hello, World!"})
    }
}