export const metadata = {
    title: "Find Expert Tutors | MediQueue",
    description: "Browse certified medical tutors, manage your practical learning sessions, and track your active academic queue metrics securely.",
    keywords: [
        "MediQueue", 
        "Medical Tutors", 
        "Healthcare Instructors", 
        "Queue Tracking", 
        "Academic Session Management"
    ],
    authors: [{ name: "MediQueue Team" }],
};

const Tutors = ({children}) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default Tutors;