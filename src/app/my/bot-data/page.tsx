import { currentUser } from '@clerk/nextjs'
import Link from 'next/link'

const mockData = [
  {
    id: 1,
    title: 'Bane Kerac synopsis',
    text: 'Branislav Kerac (Serbian Cyrillic: Бранислав Керац; born September 7, 1952, Novi Sad) is a Serbian comic book creator, known best for his series Cat Claw. In the US he also published under his pseudonym H.M. Baker.[2] Credits in American comics include The Black Pearl and Ghost for Dark Horse Comics. He was a drummer for the heavy metal band GeroMetal.',
  },
  {
    id: 2,
    title: 'Bane Kerac career (part 1)',
    text: 'Kerac fell in love with comics reading Davy Crockett, Prince Valiant and Chlorophylle in the Yugoslav Kekec magazine, but what inspired him to pursue a professional career was the first appearance of Romita’s Daredevil in Zenit.',
  },
  {
    id: 3,
    title: 'Bane Kerac career (part 3)',
    text: 'Kerac debuted in 1975 with Lieutenant Tara, a WW2 comic he co-created with his childhood friend, comic book writer Svetozar Obradović. The duo went on to produce Kobra, the most popular Yugoslav title of the 1980s. Kerac’s super-heroine Cat Claw reached even greater success abroad. In addition, he spearheaded teams of writers and artists that worked on the licensed Tarzan and Blek comics. Kerac was also involved in the production of Ninja and Lun, kralj ponoći comics, titles based on the Yugoslav pulp novels. In between professional assignments, Kerac worked on his labor of love, Billy the Spit. Finally, he created or co-created a number of Western, war, fantasy, noir and humorous shorts, published in various anthologies.',
  },
  {
    id: 4,
    title: 'Bane Kerac career (part 4)',
    text: 'In the 1990s the local comic book industry collapsed with the breakup of Yugoslavia. Kerac turned to music and graphic design, doing occasional work-for-hire for foreign publishers. After the local scene experienced a revival in the 2000s, he returned to drawing, mostly working for publishers in France and Italy.',
  },
  {
    id: 5,
    title: 'Bane Kerac career (part 5)',
    text: 'Kerac was a member of the editorial board of revamped Stripoteka from 1999 to 2015. In 2005 Kerac was awarded Special Award to General Contribution to Serbian Comics, a lifetime achievement award at the International Comics Festival in Belgrade. Kerac’s influences include Silver Age Marvel comics as well as bandes dessinées, but also Western and action movies. His comics often feature a number of cameos of his friends and celebrities, humorous self-portraits, references to heavy metal music, and other Easter eggs.',
  },
  {
    id: 6,
    title: 'Bane Kerac career (part 6)',
    text: 'The character of Cameron Hill in Cat Claw was modeled after the artist. Kerac played him in a TV short titled City Cat in 1992. In 2022 Youth Theatre Novi Sad staged a play based on Cat Claw comics.[5] It was written by Uglješa Šajtinac and Nikola Davić, directed by Michael Helmerhorst and starring Ivana Vukčević as the titular heroine.',
  },
  {
    id: 7,
    title: 'Bane Kerac personal life',
    text: 'Kerac’s surname is toponymic and denotes a person from Ker (presently the village of Zmajevo in Serbia). Kerac lives with his family in Novi Sad. He studied stomatology but dropped out because he decided it was “better to become a good artist than a bad dentist.” He met his wife Ljiljana when she was hired as a letterer. She also featured as minor characters in a few of his comics. Their son Tara was named after Kerac’s character Lt Tara. The boy in a Tarzan episode called “The Boy from Stars” was modeled after him. Both the father and the son play music. From 1992 to 2000 Kerac was a drummer for GeroMetal, who released two hard rock albums - Der rauch am waßer in 1993 and Cat Claw in 1996. He has also done cover art for a number of other bands. His other son, Nebojša, was named after Daredevil and is also a musician and graphic designer.',
  },
]
export default async function Page() {
  const user = await currentUser()
  // prism + api + supabase + vector db
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center border-b border-gray-200 pb-5">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Bot Data
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            Texts that the bot uses as the source of information.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <Link
            href="/my/bot-data/create-new"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add text
          </Link>
        </div>
      </div>
      <div className="-mx-4 flow-root sm:mx-0">
        <table className="min-w-full">
          <colgroup>
            <col className="w-full sm:w-1/2" />
            <col className="sm:w-1/6" />
          </colgroup>
          <tbody>
            {mockData.map((data) => (
              <tr key={data.id} className="border-b border-gray-200">
                <td className="max-w-0 py-5 pl-4 pr-3 text-sm sm:pl-0">
                  <div className="font-medium text-gray-900">
                    {
                      <a
                        className="text-indigo-600 hover:text-indigo-500"
                        href="/my/bot-data/1"
                      >
                        {data.title}
                      </a>
                    }
                  </div>
                  <div className="mt-1 truncate text-gray-500">{data.text}</div>
                </td>
                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                  <a
                    href="javascript:void(0)"
                    className="text-red-600 hover:text-red-500"
                  >
                    Delete<span className="sr-only">, {data.title}</span>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
