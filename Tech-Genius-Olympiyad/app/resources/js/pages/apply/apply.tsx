import InputError from "@/components/input-error";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Spinner } from "@/components/ui/spinner";
import { apply } from "@/routes";
import { Form } from "@inertiajs/react";

interface ApplyProps {
  status?: string;
}

const Apply = ({ status }: ApplyProps) => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* LEFT SECTION — Gradient Background with Image */}
      <div
        className="relative flex-1 flex items-center justify-center bg-gradient-to-br from-purple-600 via-blue-500 to-indigo-500 text-white p-8"
        style={{
          backgroundImage: "url('/quiz-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-700/90 via-blue-600/85 to-indigo-700/80"></div>

        <div className="relative z-10 text-center max-w-md">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Tech Genius Olympiyad 2025
          </h1>
          <p className="text-lg text-blue-100 mb-6">
            Challenge your mind. Compete with the best. Win exciting prizes worth ₹10,000!
          </p>
          <ul className="text-sm text-blue-100 space-y-2 text-left">
            <li>💡 Multiple quiz categories</li>
            <li>🏆 National-level competition</li>
            <li>🎓 Open to school & college students</li>
            <li>🎁 Certificates & recognition for all participants</li>
          </ul>
        </div>
      </div>

      {/* RIGHT SECTION — Registration Form */}
      <div className="flex-1 flex items-center justify-center bg-white px-6 py-10 md:px-12 overflow-y-auto">
        <div className="w-full max-w-2xl">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
            📝 Quiz Registration Form
          </h2>
          <p className="text-center text-gray-600 mb-6 text-sm">
            Fill in your details to participate
          </p>

          <Form {...apply.form()} className="text-black">
            {({ processing, errors }) => (
              <>
                {/* Form Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="grid gap-1">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      type="text"
                      name="name"
                      required
                      placeholder="John Doe"
                    />
                    <InputError message={errors.name} />
                  </div>

                  {/* Email */}
                  <div className="grid gap-1">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      required
                      placeholder="student@example.com"
                    />
                    <InputError message={errors.email} />
                  </div>

                  {/* Phone */}
                  <div className="grid gap-1">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 98765 43210"
                    />
                    <InputError message={errors.phone} />
                  </div>

                  {/* DOB */}
                  <div className="grid gap-1">
                    <Label htmlFor="dob">Date of Birth</Label>
                    <Input id="dob" type="date" name="dob" required />
                    <InputError message={errors.dob} />
                  </div>

                  {/* Gender */}
                  <div className="grid gap-1">
                    <Label htmlFor="gender">Gender</Label>
                    <Input
                      id="gender"
                      type="text"
                      name="gender"
                      required
                      placeholder="Male / Female / Other"
                    />
                    <InputError message={errors.gender} />
                  </div>

                  {/* Institution */}
                  <div className="grid gap-1">
                    <Label htmlFor="institution">Institution</Label>
                    <Input
                      id="institution"
                      type="text"
                      name="institution"
                      required
                      placeholder="Springdale College"
                    />
                    <InputError message={errors.institution} />
                  </div>

                  {/* Grade */}
                  <div className="grid gap-1">
                    <Label htmlFor="grade">Grade / Year</Label>
                    <Input
                      id="grade"
                      type="text"
                      name="grade"
                      required
                      placeholder="12th Grade / 2nd Year B.Tech"
                    />
                    <InputError message={errors.grade} />
                  </div>

                  {/* Percentage */}
                  <div className="grid gap-1">
                    <Label htmlFor="percent">Percentage / CGPA</Label>
                    <Input
                      id="percent"
                      type="text"
                      name="percent"
                      required
                      placeholder="e.g., 85% or 8.2 CGPA"
                    />
                    <InputError message={errors.percent} />
                  </div>

                  {/* City */}
                  <div className="grid gap-1">
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      type="text"
                      name="city"
                      required
                      placeholder="Enter city"
                    />
                    <InputError message={errors.city} />
                  </div>

                  {/* Zipcode */}
                  <div className="grid gap-1">
                    <Label htmlFor="zipcode">Zipcode</Label>
                    <Input
                      id="zipcode"
                      type="text"
                      name="zipcode"
                      required
                      placeholder="Enter zipcode"
                    />
                    <InputError message={errors.zipcode} />
                  </div>

                  {/* Address */}
                  <div className="grid gap-1 md:col-span-2">
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      type="text"
                      name="address"
                      required
                      placeholder="Enter address"
                    />
                    <InputError message={errors.address} />
                  </div>

                  {/* State */}
                  <div className="grid gap-1">
                    <Label htmlFor="state">State</Label>
                    <Select
                      name="state"
                    >
                      <SelectTrigger id="state">
                        <SelectValue placeholder="Select state" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Andhra Pradesh">Andhra Pradesh</SelectItem>
                        <SelectItem value="Arunachal Pradesh">Arunachal Pradesh</SelectItem>
                        <SelectItem value="Assam">Assam</SelectItem>
                        <SelectItem value="Bihar">Bihar</SelectItem>
                        <SelectItem value="Chhattisgarh">Chhattisgarh</SelectItem>
                        <SelectItem value="Goa">Goa</SelectItem>
                        <SelectItem value="Gujarat">Gujarat</SelectItem>
                        <SelectItem value="Haryana">Haryana</SelectItem>
                        <SelectItem value="Himachal Pradesh">Himachal Pradesh</SelectItem>
                        <SelectItem value="Jharkhand">Jharkhand</SelectItem>
                        <SelectItem value="Karnataka">Karnataka</SelectItem>
                        <SelectItem value="Kerala">Kerala</SelectItem>
                        <SelectItem value="Madhya Pradesh">Madhya Pradesh</SelectItem>
                        <SelectItem value="Maharashtra">Maharashtra</SelectItem>
                        <SelectItem value="Manipur">Manipur</SelectItem>
                        <SelectItem value="Meghalaya">Meghalaya</SelectItem>
                        <SelectItem value="Mizoram">Mizoram</SelectItem>
                        <SelectItem value="Nagaland">Nagaland</SelectItem>
                        <SelectItem value="Odisha">Odisha</SelectItem>
                        <SelectItem value="Punjab">Punjab</SelectItem>
                        <SelectItem value="Rajasthan">Rajasthan</SelectItem>
                        <SelectItem value="Sikkim">Sikkim</SelectItem>
                        <SelectItem value="Tamil Nadu">Tamil Nadu</SelectItem>
                        <SelectItem value="Telangana">Telangana</SelectItem>
                        <SelectItem value="Tripura">Tripura</SelectItem>
                        <SelectItem value="Uttar Pradesh">Uttar Pradesh</SelectItem>
                        <SelectItem value="Uttarakhand">Uttarakhand</SelectItem>
                        <SelectItem value="West Bengal">West Bengal</SelectItem>
                      </SelectContent>
                    </Select>
                    <InputError message={errors.state} />
                  </div>

                  {/* Country */}
                  <div className="grid gap-1">
                    <Label htmlFor="country">Country</Label>
                    <Input
                      id="country"
                      type="text"
                      name="country"
                      required
                      placeholder="Enter country"
                    />
                    <InputError message={errors.country} />
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2"
                  disabled={processing}
                >
                  {processing ? (
                    <>
                      <Spinner />
                      <span className="ml-2">Submitting...</span>
                    </>
                  ) : (
                    "Submit Registration"
                  )}
                </Button>

                {/* Status */}
                {status && (
                  <div className="mt-4 text-center text-sm font-medium text-green-600">
                    {status}
                  </div>
                )}
              </>
            )}
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Apply;
