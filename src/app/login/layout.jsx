export const metadata = {
    title: "Login | MediQueue",
    description: "Access your MediQueue account to manage medical queues, book expert appointments, and connect with healthcare professionals seamlessly.",
    keywords: [
        "MediQueue Login",
        "Sign In MediQueue",
        "Medical Queue Management",
        "Doctor Appointment Account"
    ],
    openGraph: {
        title: "Login to MediQueue",
        description: "Securely sign in to your MediQueue portal.",
        type: "website",
    },
};

const Login = ({children}) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default Login;