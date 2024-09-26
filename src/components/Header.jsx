import Nav from "./Nav";

export default function Header() {
    return (
        <>
            <header className="bg-[#333] text-white p-4 flex justify-between items-center md:flex-row flex-col">
                <div className="text-xl font-bold">ShoeStore</div>
                <Nav className="flex w-full justify-end" />
            </header>
        </>
    );
}