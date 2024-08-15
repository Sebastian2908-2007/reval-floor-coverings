'use client'
import { useState } from "react";
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
//Component requires shadcdn
export default function ContactForm () {
    // form state
   const [formData,setFormData] = useState({name:'',email:'',phone:'',description:'',subject:''});
   // function to handle form field changes
   const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
        ...formData,
        [name]: value,
    });
};

const handleSubmit = async (event) => {
    event.preventDefault();
    const {name,email,phone,description,subject} = formData;
   
    try{
  const response = await fetch('/api/Email',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email:email, name:name, phone:phone, description:description, subject:subject }),
    });
    if(response.ok) {
       window.location.reload();
    }
}catch(e) {
    console.log(e);
}
   
};
    return(
        <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block mb-1 text-sm font-medium">
              Name
            </label>
            <Input onChange={handleChange} id="name" type="text" name="name"  placeholder="John Doe" />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium">
              Email
            </label>
            <Input onChange={handleChange} id="email" type="email" placeholder="john@example.com" name="email" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block mb-1 text-sm font-medium">
              Phone
            </label>
            <Input onChange={handleChange} id="phone" type="tel" placeholder="(123) 456-7890"   name="phone"  />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-1 text-sm font-medium">
              Subject
            </label>
            <Input onChange={handleChange} id="subject" type="text" placeholder="Inquiry about tiles" name="subject"/>
          </div>
        </div>
        <div>
          <label htmlFor="description" className="block mb-1 text-sm font-medium">
            Message
          </label>
          <Textarea onChange={handleChange} id="message" rows={4} placeholder="How can we help you?" name="description" />
        </div>
        <Button type="submit" className="bg-[#2f4b65] text-white hover:bg-[#1e3549] transition-colors">
          Submit
        </Button>
      </form>
    );
};