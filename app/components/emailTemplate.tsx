
interface EmailTemplateProps {
    name: string,
    phone: string,
    email: string,
    MCNumber: string,
    equipment: string,
    numberOfTrucks: number
}

export function EmailTemplate({name, phone, email, MCNumber, equipment, numberOfTrucks} : EmailTemplateProps){

    return(
        <div>
            <h1>New Request for services!</h1>
            <h2>From: {name}</h2>
            <div>
                <p>Contact Information!</p>
                <p>Phone Number: {phone}</p>
                <p>Email: {email}</p>
            </div>
            <h3>These are their company details</h3>
            <ul>
                <li>MCNumber: {MCNumber}</li>
                <li>Equipment types: {equipment}</li>
                <li>Number of trucks: {numberOfTrucks}</li>
            </ul>
        </div>
    )
}