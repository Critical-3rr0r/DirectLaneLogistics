import { NextRequest, NextResponse } from "next/server";
import { EmailTemplate } from "../../components/emailTemplate";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY)
export async function POST(req: NextRequest){
    const formData = await req.formData()

    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const MCNumber = formData.get("MCNumber") as string
    const equipment = formData.get("equipment") as string
    const numberOfTrucks = parseInt(formData.get("numberOfTrucks") as string)

    if(name === "" || email === "" || phone === "" || MCNumber === "" || equipment === "" || numberOfTrucks === 0){
        return NextResponse.json({error: "form not filled out"}, {status: 401})
    }
    try{
        const {data, error} = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: ["dalton.robinson36@gmail.com"],
            subject: `New Request from ${name}`,
            react: EmailTemplate({name: name, phone: phone, email: email, MCNumber: MCNumber, equipment: equipment, numberOfTrucks: numberOfTrucks})
        });
        if(error){
            return NextResponse.json({error: error}, {status: 500})
        }
        return NextResponse.json({message: data}, {status: 200})
    }catch(err){
        console.error(err)
        return NextResponse.json({error: "Error with Resend API"}, {status: 500})
    }
}