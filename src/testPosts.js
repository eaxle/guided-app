const testPosts = [
    {
        id: 'post0',
        title: "Card Title - 28 Characters",
        user: "John Smith",
        userIcon: "userIcon",
        duration: "2",
        timeUnit: "Hours",
        rating: 3,
        reviewCount: 18,
        currency: 'AUD',
        price: 100,
        guestNum: 2,
        guestMax: 6,
        languageOffered: ["English", "Mandarin"],
        description: "1234567890",
        provided: ["line1", "line2", "line3"],
        required: ["line1", "line2", "line3"],
        accessibility: ["line1", "line2", "line3"],
        location: {
            city: "Melbourne",
            country: "Australia",
            street: "123 ABC street",
            postcode: "1234",
            suburb: "DEF"
        },
        cancelation: "123",
        review: [
            {
                id: "review0",
                reviewUser: "Meghan Wilson",
                reviewIcon: "userIcon",
                reviewDate: "dd/mm/yyyy",
                reviewText: "ahsnsksydhd"
            },
            {
                id: "review1",
                reviewUser: "Meghan Wilson",
                reviewIcon: "userIcon",
                reviewDate: "dd/mm/yyyy",
                reviewText: "ahsnsksydhd"
            }
        ]
    },
    {
        id: "post1",
        title: "Card Title - 28 Characters",
        user: "John Smith",
        userIcon: "userIcon",
        duration: "2 Hours",
        location: "Melbourne",
        rating: 3,
        price: 100,
        review: 18,
        guestNum: 2
    },
    {
        id: "post2",
        title: "Card Title - 28 Characters",
        user: "John Smith",
        userIcon: "userIcon",
        duration: "2 Hours",
        location: "Melbourne",
        rating: 3,
        price: 100,
        review: 18,
        guestNum: 2
    }
]

export default testPosts;
