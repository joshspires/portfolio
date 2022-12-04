import Iframe from 'react-iframe'

export default function Hero() {
  return (
    <main class="bg-white dark:bg-gray-800">
      <section class="cta">
        <div class="mx-auto max-w-4xl">
          <div class="container mx-auto p-4 grid grid-cols-1 rounded-xl sm:grid-cols-5 m-10 gap-4 bg-gray-200 dark:bg-black">
            <div class="col-span-3 flex flex-col p-4">
              <p class="text-xl dark:text-white tracking-tight sm:text-2xl">The story behind: A man, a drone, a dream.</p>
            </div>
            <div class="col-span-1 flex flex-col p-4 justify-center">
              <a href="https://learn.qutee.com/a-man-a-drone-a-dream/" target="_blank" rel="noreferrer" class="bg-black p-2 text-white rounded-xl text-center">Read now</a>
            </div>
          </div>
        </div>
      </section>
      <section class="hero">
        <div class="mx-auto max-w-4xl">
          <div class="container mx-auto grid grid-cols-1 sm:grid-cols-3 mt-10 mb-10 gap-4 bg-white dark:bg-gray-800">
            <div class="col-span-2 flex flex-col p-4">
              <h1 class="text-5xl dark:text-white tracking-tight sm:text-6xl">Specialised drone and technology professional</h1>
              <p class="text-3xl dark:text-white tracking-tight sm:text-4xl mt-6">with over 5 years experience in the drone industry.</p>
            </div>
            <div class="col-span-1 flex flex-col p-4">
              <img class="rounded-xl grayscale" src="https://joshspires.com.au/wp-content/uploads/2022/10/IMG-20200918-WA0008-711x1024.jpg" alt="Joshua Spires Australia" width="300" height="400" />
            </div>
          </div>
        </div>
      </section>
      <section class="clients">
        <div class="mx-auto max-w-4xl">
          <div class="container mx-auto p-4 grid grid-cols-1 rounded-xl sm:grid-cols-5 m-10 gap-4 bg-gray-200 dark:bg-black">
            <div class="col-span-1 flex flex-col p-4">
              <img class="rounded-xl invert dark:invert-0" src="https://joshspires.com.au/wp-content/uploads/2022/10/DroneDJ-Joshua-Josh-Spires.png" alt="Joshua Spires Australia" width="300" height="400" />
            </div>
            <div class="col-span-1 flex flex-col p-4">
              <img class="rounded-xl invert dark:invert-0" src="https://joshspires.com.au/wp-content/uploads/2022/10/Unsplash-Josh-Spires.png" alt="Joshua Spires Australia" width="300" height="400" />
            </div>
            <div class="col-span-1 flex flex-col p-4">
              <img class="rounded-xl invert dark:invert-0" src="https://joshspires.com.au/wp-content/uploads/2022/10/Sphere-Drones-Josh-Spires.png" alt="Joshua Spires Australia" width="300" height="400" />
            </div>
            <div class="col-span-1 flex flex-col p-4">
              <img class="rounded-xl invert dark:invert-0" src="https://joshspires.com.au/wp-content/uploads/2022/10/Josh-Spires-Drone-Pilots-Media.png" alt="Joshua Spires Australia" width="300" height="400" />
            </div>
            <div class="col-span-1 flex flex-col p-4">
              <img class="rounded-xl invert dark:invert-0" src="https://joshspires.com.au/wp-content/uploads/2022/10/Josh-Spires-Rise-Above.png" alt="Joshua Spires Australia" width="300" height="400" />
            </div>
          </div>
        </div>
      </section>
      <section class="services">
        <div class="mx-auto max-w-4xl">
          <div class="container mx-auto grid grid-cols-1 rounded-xl sm:grid-cols-3 mt-10 mb-10 gap-4 bg-white dark:bg-gray-800">
            <p class="col-span-full text-3xl dark:text-white tracking-tight sm:text-4xl text-center">What I do</p>
            <div class="col-span-1 flex flex-col p-4 bg-gray-200 dark:bg-black rounded-xl">
              <p class="text-2xl dark:text-white tracking-tight sm:text-3xl text-center">Advisory</p>
              <p class="dark:text-white tracking-tight text-center">Looking to bring a drone product to market, hardware, or software, or need an educated opinion on your business?</p>
            </div>
            <div class="col-span-1 flex flex-col p-4 bg-gray-200 dark:bg-black rounded-xl">
              <p class="text-2xl dark:text-white tracking-tight sm:text-3xl text-center">Content marketing</p>
              <p class="dark:text-white tracking-tight text-center">Need to market your drone product through content, or looking to educate your customers?</p>
            </div>
            <div class="col-span-1 flex flex-col p-4 bg-gray-200 dark:bg-black rounded-xl">
              <p class="text-2xl dark:text-white tracking-tight sm:text-3xl text-center">SEO</p>
              <p class="dark:text-white tracking-tight text-center">Want to improve the presence of your drone brand online and rank higher on Google?</p>
            </div>
            <div class="col-span-1 flex flex-col p-4 bg-gray-200 dark:bg-black rounded-xl">
              <p class="text-2xl dark:text-white tracking-tight sm:text-3xl text-center">Audits</p>
              <p class="dark:text-white tracking-tight text-center">Interested in taking your drone business to the next level or looking for extra insight into your operations?</p>
            </div>
            <div class="col-span-1 flex flex-col p-4 bg-gray-200 dark:bg-black rounded-xl">
              <p class="text-2xl dark:text-white tracking-tight sm:text-3xl text-center">B2B marketing</p>
              <p class="dark:text-white tracking-tight text-center">Looking to market your drone products and services to other businesses?</p>
            </div>
            <div class="col-span-1 flex flex-col p-4 bg-gray-200 dark:bg-black rounded-xl">
              <p class="text-2xl dark:text-white tracking-tight sm:text-3xl text-center">Content creation</p>
              <p class="dark:text-white tracking-tight text-center">Need content, text, video, or photo for your drone product launch or rebrand?</p>
            </div>
          </div>
        </div>
      </section>
      <section class="work">
        <div class="mx-auto max-w-4xl">
          <div class="container mx-auto grid grid-cols-1 rounded-xl sm:grid-cols-3 mt-10 mb-10 gap-4 bg-white dark:bg-gray-800">
            <p class="col-span-full text-3xl dark:text-white tracking-tight sm:text-4xl text-center">What I do</p>
            <div class="col-span-2 flex flex-col bg-gray-200 dark:bg-black rounded-xl">
              <Iframe scrolling="no" url="https://authory.com/JoshSpires/embed?theme=dark&amp;numItems=4&amp;mode=compact&amp;showSocialMedia=false&amp;showHighlight=false&amp;useCover=false" width="100%" height="475px" class="border-radius:0.75rem"></Iframe>
            </div>
            <div class="col-span-1 flex flex-col gap-4 rounded-xl">
            <div class="col-span-1 flex flex-col p-4 bg-gray-200 dark:bg-black rounded-xl">
              <p class="text-2xl dark:text-white tracking-tight sm:text-3xl mb-5 text-center">Articles</p>
              <a href="https://learn.qutee.com/a-man-a-drone-a-dream/" target="_blank" rel="noreferrer" class="bg-black p-2 text-white rounded-xl text-center">Explore now</a>
            </div>
            <div class="col-span-1 flex flex-col p-4 bg-gray-200 dark:bg-black rounded-xl">
              <p class="text-2xl dark:text-white tracking-tight sm:text-3xl mb-5 text-center">Videos</p>
              <a href="https://learn.qutee.com/a-man-a-drone-a-dream/" target="_blank" rel="noreferrer" class="bg-black p-2 text-white rounded-xl text-center">Explore now</a>
            </div>
            <div class="col-span-1 flex flex-col p-4 bg-gray-200 dark:bg-black rounded-xl">
              <p class="text-2xl dark:text-white tracking-tight sm:text-3xl mb-5 text-center">Photos</p>
              <a href="https://learn.qutee.com/a-man-a-drone-a-dream/" target="_blank" rel="noreferrer" class="bg-black p-2 text-white rounded-xl text-center">Explore now</a>
            </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}