import React from "react";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { Heart, HeartHandshake } from "lucide-react";
import { useForm } from "react-hook-form"   

function BloodRequest({className}) {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
    const onSubmit = (data) => console.log(data)

  return (
    <Modal>
      <Button className={className}><HeartHandshake className="h-5 w-5"/>Blood Request</Button>
      <Modal.Backdrop>
        <Modal.Container size="cover" >
          <Modal.Dialog className="bg-[var(--bg-box-color)] lg:w-[35rem]">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-red-900 text-[var(--primary-color)]">
                <Heart />
              </Modal.Icon>
              <Modal.Heading className="text-[var(--primary-color)] text-xl  customFont">Create Blood Request</Modal.Heading>
              <p className="text-sm/4 text-[var(--text-color)] -mt-2 my-2">
                Provide the required details to help find suitable blood donors or nearby blood banks.
              </p>
            </Modal.Header>
            <Modal.Body className="p-4">
                <form onSubmit={handleSubmit(onSubmit)} style={{marginTop: "0px"}} >
                    <div>
                        <label htmlFor="patientName" style={{color: 'lightGray', fontSize: '12px'}}>Patient Name</label>
                        <input type='text' id='patientName' placeholder='Full name of recipient' {...register("patientName", { required: true })} />
                        {errors.patientName && <span>This field is required</span>}
                    </div>

                    <div className='grid lg:grid-cols-2 gap-2 my-2'>
                        <div>
                            <label htmlFor="contactNumber" style={{color: 'lightGray', fontSize: '12px'}}>Contact No.</label>
                            <input type='text' id='contactNumber' {...register("contactNumber", { required: true })} />
                            {errors.contactNumber && <span>This field is required</span>}
                        </div>

                        <div>
                            <label htmlFor="facilityType" style={{color: 'lightGray', fontSize: '12px'}}>Blood Group</label>
                            <select id="facilityType"  {...register("exampleRequired", { required: true })}>
                                <option value="A+">A+ Group</option>
                                <option value="A-">A- Group</option>
                                <option value="B+">B+ Group</option>
                                <option value="B-">B- Group</option>
                                <option value="AB+">AB+ Group</option>
                                <option value="AB-">AB- Group</option>
                                <option value="O+">O+ Group</option>
                                <option value="O-">O- Group</option>
                            </select>
                            {errors.exampleRequired && <span>This field is required</span>}
                        </div>
                    </div>

                    <div className='grid lg:grid-cols-2 gap-2 my-2'>
                        <div>
                            <label htmlFor="blood_units" style={{color: 'lightGray', fontSize: '12px'}}>Number of Units</label>
                            <input type='number' id='blood_units' {...register("blood_units", { required: true })} />
                            {errors.blood_units && <span>This field is required</span>}
                        </div>

                        <div>
                            <label htmlFor="hospital_name" style={{color: 'lightGray', fontSize: '12px'}}>Hospital Name & Bed Number</label>
                            <input type='text' id='hospital_name' {...register("hospital_name", { required: true })} />
                            {errors.hospital_name && <span>This field is required</span>}
                        </div>
                    </div>
                    <div className="my-4">
                        <h1 className="my-2 text-white font-bold">Urgency Level</h1>
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-5">
                            <div className="relative my-2">
                                <input
                                type="radio"
                                id="immediate"
                                className="absolute peer invisible -z-10 "
                                {...register("urgency_level")}
                                />
                                <label
                                className="inline-block cursor-pointer peer-checked:bg-[var(--primary-color)]  w-full text-center rounded-2xl bg-transparent border border-gray-500"
                                style={{ padding: "4px", fontSize: "15px" }}
                                htmlFor="immediate"
                                >
                                Immediate (1-2h)
                                </label>
                            </div>
                            <div className="relative my-2">
                                <input
                                type="radio"
                                id="urgent"
                                className="absolute peer invisible -z-10 "
                                {...register("urgency_level")}
                                />
                                <label
                                className="inline-block cursor-pointer peer-checked:bg-[var(--primary-color)]  w-full text-center rounded-2xl bg-transparent border border-gray-500"
                                style={{ padding: "4px", fontSize: "15px" }}
                                htmlFor="urgent"
                                >
                                Urgent (12h)
                                </label>
                            </div>
                            <div className="relative my-2">
                                <input
                                type="radio"
                                id="standard"
                                className="absolute peer invisible -z-10 "
                                {...register("urgency_level")}
                                />
                                <label
                                className="inline-block cursor-pointer peer-checked:bg-[var(--primary-color)]  w-full text-center rounded-2xl bg-transparent border border-gray-500"
                                style={{ padding: "4px", fontSize: "15px" }}
                                htmlFor="standard"
                                >
                                Standard (24h)
                                </label>
                            </div>
                        
                        </div>
                    </div>
                    <div className='my-4'>
                        <label htmlFor="doctorPrescriptions" style={{color: 'lightGray', fontSize: '12px'}}>Doctor Prescriptions / Remarks (Optional)</label>
                        <textarea id='doctorPrescriptions' className="h-30" {...register("doctorPrescriptions", { required: true })}></textarea>
                        {errors.doctorPrescriptions && <span>This field is required</span>}
                    </div>
                    <input type="submit" value="Send Blood Request"/>
                </form>
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}

export default BloodRequest;
