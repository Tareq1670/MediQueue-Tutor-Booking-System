export const homeData = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/home-tutors`);
    const data = await res.json();
    return data;
}