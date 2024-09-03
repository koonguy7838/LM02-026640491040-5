import { Menu } from "./template/menu";
import { Header } from "./template/header";
import { Footer } from "./template/footer";
import { useState } from "react";

interface HerbCard {
    id: number;
    Name: string;
    Image: string;
    Detail: string;
    Prop: string;
    Howto: string;
    Make: string;
    Type: string;
    Contact: string;
}

let nextId = 1;

export default function MainForms() {
    const [herbname, setHerbname] = useState('');
    const [herbimg, setHerbimg] = useState('');
    const [herbdetail, setHerbdetail] = useState('');
    const [herbprop, setHerbprop] = useState('');
    const [herbhowto, setHerbhowto] = useState('');
    const [herbmake, setHerbmake] = useState('');
    const [herntype, setHerntype] = useState('');
    const [contactmake, setContactmake] = useState('');
    const [cards, setCards] = useState<HerbCard[]>([]);
    const [formError, setFormError] = useState<string | null>(null);

    const handleClickAdd = () => {
        if (!herbname || !herbimg || !herbprop || !herbhowto || !herbmake || !contactmake) {
            setFormError('กรุณากรอกข้อมูลให้ครบถ้วน');
            return;
        }
        const newCard = {
            id: nextId++,
            Name: herbname,
            Image: herbimg,
            Detail: herbdetail,
            Prop: herbprop,
            Howto: herbhowto,
            Make: herbmake,
            Type: herntype,
            Contact: contactmake
        };
        setCards([...cards, newCard]);
        // Clear the form after adding
        setHerbname('');
        setHerbimg('');
        setHerbdetail('');
        setHerbprop('');
        setHerbhowto('');
        setHerbmake('');
        setHerntype('');
        setContactmake('');
        setFormError(null);
    };

    return (
        <>
            <Menu />
            <Header />
            <div className="m-0 p-4 bg-gray-400 h-screen">
                <div className="bg-white rounded-xl p-4">
                    <h1 className="text-2xl">เพิ่มข้อมูลยาสมุนไพร</h1>
                    <form>
                        {formError && (
                                <div className="mb-4 p-2 bg-red-100 text-red-700 border border-red-300 rounded">
                                    {formError}
                                </div>  
                            )}
                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ชื่อยาสมุนไพร *</label>
                                <input name="fherbname" value={herbname} onChange={(e) => setHerbname(e.target.value)} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ฟ้าทะลายโจร" required />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ภาพตัวอย่าง *</label>
                                <input name="fherbimg" value={herbimg} onChange={(e) => setHerbimg(e.target.value)} type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ภาพตัวอย่าง" required />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">รายระเอียด</label>
                                <textarea name="fherbdetail" value={herbdetail} onChange={(e) => setHerbdetail(e.target.value)} id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="รายละเอียด"/>
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">สรรพคุณ *</label>
                                <textarea name="fherbprop" value={herbprop} onChange={(e) => setHerbprop(e.target.value)} id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="สรรพคุณ" required />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">การนำไปใช้ *</label>
                                <select name="fherbhowto" value={herbhowto} onChange={(e) => setHerbhowto(e.target.value)} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                                    <option value="">เลือกการนำไปใช้</option>
                                    <option value="ยาใช้ภายใน">ยาใช้ภายใน</option>
                                    <option value="ยาใช้ภายนอก">ยาใช้ภายนอก</option>
                                    <option value="ยาใช้ภายในและภายนอก">ยาใช้ภายในและภายนอก</option>
                                </select>
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ผู้ผลิต *</label>
                                <input name="fherbmake" value={herbmake} onChange={(e) => setHerbmake(e.target.value)} type="text" id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ผู้ผลิต" required />
                            </div>
                        </div>
                        <div className="mb-6 mt-4">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ประเภทยาสมุนไพร</label>
                            <select name="fherntype" value={herntype} onChange={(e) => setHerntype(e.target.value)} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="">เลือกประเภทยาสมุนไพร</option>
                                <option value="เม็ด">เม็ด</option>
                                <option value="น้ำ">น้ำ</option>
                                <option value="ทา">ทา</option>
                            </select>
                        </div>
                        <div className="mb-6">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ติดต่อผู้ผลิต *</label>
                            <input name="fcontactmake" value={contactmake} onChange={(e) => setContactmake(e.target.value)} type="text" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ติดต่อผู้ผลิต" required />
                        </div>
                        <div className="grid grid-cols-2">
                            <div></div>
                            <div className="text-end">
                                <button type="button" className="text-white m-2 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={handleClickAdd}>Save</button>
                                <button type="reset" className="text-white m-2 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">Clear</button>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="bg-white rounded-xl mt-4 p-4">
                    <div className="mt-6">
                        <h2 className="text-xl mb-4">ข้อมูลยาสมุนไพร</h2>
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">ลำดับ</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">ชื่อยาสมุนไพร</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">ภาพ</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">รายละเอียด</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">สรรพคุณ</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">การนำไปใช้</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">ผู้ผลิต</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">ประเภท</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">ติดต่อ</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {cards.map((card) => (
                                    <tr key={card.id}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{card.id}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{card.Name}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            <img src={card.Image} alt={card.Name} className="w-20 h-20 object-cover" />
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{card.Detail}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{card.Prop}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{card.Howto}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{card.Make}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{card.Type}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{card.Contact}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
