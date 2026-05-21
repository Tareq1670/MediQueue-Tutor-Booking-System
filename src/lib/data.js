export const homeData = async () => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/home-tutors`,{cache:"no-store"},
    );
    const data = await res.json();
    return data;
};

export const getTutors = async (search = "", startDate = "", endDate = "") => {
    const query = new URLSearchParams();

    Object.entries({ search, startDate, endDate }).forEach(([key, val]) => {
        if (val) query.append(key, val);
    });

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/tutors?${query}`,
        {
            cache: "no-store",
        },
    );

    return res.json();
};



export const getMyTutors = async(id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-tutors/${id}`);
    const data = await res.json();
    return data;
}


export const getTutorsDetail = async(id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/tutor-details/${id}`);
    const data = await res.json();
    return data;
}

export const getAllBooking = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-booking`);
    const data = await res.json();
    return data
}


export const getUserBook = async(id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/user-book/${id}`);

    const data = await res.json();
    return data;
}