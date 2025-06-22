"use client"
import { ChangeEvent, useState } from 'react';

type City = {
  id: string
  name: string,
  lat: string,
  long: string
}

function Search() {
  const [Cities, setCities] = useState<City[]>([]);
  const [Show, setShow] = useState<Boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    fetch(`/api/search?q=${encodeURIComponent(value)}`)
      .then((response) => response.json())
      .then((res) => {
        setCities(res.data);
        setShow(res.length > 0);
      })
      .catch((_e) => {
        setCities([]);
        setShow(false);
      });
  }

  const select = (city: City) => {
    localStorage.setItem("city", JSON.stringify(city));
    window.location.pathname = "/";
  }

  return (
    <main className="h-screen p-4 text-neutral-800 bg-gray-50 font-serif">
      <div className="h-full w-full m-auto flex flex-col space-y-4 mt-16">
        <p className="text-4xl italic mb-6">
          enter city name
        </p>
        <span className="m-auto flex rounded-3xl bg-white border focus:border-black w-full md:w-[50vh]">
          <input
            type="text"
            className="text-2xl px-6 py-4 rounded-l-3xl focus:outline-none w-full"
            onChange={handleChange}
          />
          <button className="font-bold text-4xl hover:bg-zinc-50 px-6 rounded-r-3xl h-full active:bg-zinc-100">
            ↩
          </button>
        </span>
        {Show &&
          <span className="m-auto bg-white p-2.5 border rounded-3xl w-full md:w-[50vh]">
            <ul className="bg-white w-full rounded-3xl text-left divide-y text-2xl italic max-h-96 overflow-auto">
              {
                Cities!.map((city: City) =>
                  <li
                    key={city.id}
                    className="cursor-pointer text-center rounded-2xl text-ellipsis p-8"
                    onClick={() => select(city)}
                  >
                    {city.name}
                  </li>
                )
              }
            </ul>
          </span>
        }
      </div>
    </main>
  )
}

export default Search;
