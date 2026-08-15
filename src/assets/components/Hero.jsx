<main className="flex-1 px-8 mt py-16">
        <div className="mx-auto max-w-4xl">

          <h1 className="text-5xl font-bold tracking-tight">
            Hey, I'm Mahi 
          </h1>

          <p
            className={`mt-4 text-xl ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            I do stuff with code.
          </p>
         <button class="bg-violet-900 text-xl hover:bg-violet-600 rounded focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 ...">
  Save changes
</button>
          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() =>
                window.open(
                  "https://www.youtube.com/watch?v=dQw4w9WgXcQ&themeRefresh=1",
                  "_blank"
                )
              }
              className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-xl active:translate-y-0"
            >
               View Projects
            </button>

            <button
              onClick={() =>
                window.open(
                  "https://www.youtube.com/watch?v=dQw4w9WgXcQ&themeRefresh=1",
                  "_blank"
                )
              }
              className={`rounded-xl border px-6 py-3 font-semibold transition-all duration-200 hover:-translate-y-1 hover:shadow-lg active:translate-y-0 ${
                darkMode
                  ? "border-zinc-700 bg-zinc-900 text-white hover:bg-zinc-800"
                  : "border-gray-300 bg-white text-black hover:bg-gray-100"
              }`}
            >
               GitHub
            </button>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold">
              Knowledge
            </h2>

            <div className="mt-6 flex flex-wrap gap-3">
              {[
                "C++",
                "Python / ML",
                "JavaScript",
                "React",
                "HTML",
                "CSS",
              ].map((skill) => (
                <span
                  key={skill}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 hover:-translate-y-1 hover:shadow-md ${
                    darkMode
                      ? "border-zinc-700 bg-zinc-900 text-zinc-200"
                      : "border-gray-200 bg-gray-100 text-gray-800"
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold">
              Projects
            </h2>

            <div className="mt-6 grid gap-6 md:grid-cols-3">

              <div
                className={`rounded-2xl border p-6 shadow-sm transition-all duration-200 hover:-translate-y-2 hover:shadow-xl ${
                  darkMode
                    ? "border-zinc-800 bg-zinc-900"
                    : "border-gray-200 bg-gray-50"
                }`}
              >
                <h3 className="text-xl font-bold">
                   ML Country Guesser
                </h3>

                <p className="mt-2 text-sm opacity-70">
                  A machine learning project.
                </p>
              </div>

              <div
                className={`rounded-2xl border p-6 shadow-sm transition-all duration-200 hover:-translate-y-2 hover:shadow-xl ${
                  darkMode
                    ? "border-zinc-800 bg-zinc-900"
                    : "border-gray-200 bg-gray-50"
                }`}
              >
                <h3 className="text-xl font-bold">
                   React Page
                </h3>

                <p className="mt-2 text-sm opacity-70">
                  The website you're currently looking at.
                </p>
              </div>

              <div
                className={`rounded-2xl border p-6 shadow-sm transition-all duration-200 hover:-translate-y-2 hover:shadow-xl ${
                  darkMode
                    ? "border-zinc-800 bg-zinc-900"
                    : "border-gray-200 bg-gray-50"
                }`}
              >
                <h3 className="text-xl font-bold">
                   Manim Animation
                </h3>

                <p className="mt-2 text-sm opacity-70">
                  Mathematical animations made with Python.
                </p>
              </div>

            </div>
          </div>

        </div>
      </main>