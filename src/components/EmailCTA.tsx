import { useForm, ValidationError } from '@formspree/react';
import { Mail } from 'lucide-react';

export default function EmailCTA() {
  const [state, handleSubmit] = useForm("manjqjkb"); // ✅ Your real Formspree form ID

  return (
    <section className="relative py-24 px-6 sm:px-12 bg-gradient-to-r from-green-700 to-green-600 text-white text-center overflow-hidden">
      <div className="max-w-3xl mx-auto space-y-6 z-10 relative">
        <h2 className="text-4xl font-bold font-dm-sans tracking-tight">
          Join the Movement
        </h2>
        <p className="text-lg font-inter text-white/90">
          Be the first to know when symbolic climate impact goes live.
        </p>

        {state.succeeded ? (
          <div className="text-white font-inter text-base mt-4 bg-white/10 p-4 rounded-lg">
            🎉 Thanks for signing up! We'll keep you updated.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="relative w-full sm:w-auto">
              <Mail className="absolute left-3 top-3.5 text-green-700 w-5 h-5" />
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="pl-10 pr-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-300 w-full sm:w-80"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="text-red-200 text-xs pt-1"
              />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="bg-white text-green-700 font-semibold px-6 py-3 rounded-lg hover:bg-green-100 transition shadow-md disabled:opacity-60"
            >
              {state.submitting ? 'Sending...' : 'Keep Me Posted'}
            </button>
          </form>
        )}

        <p className="text-xs text-white/60 font-inter pt-2">
          No spam. Just climate impact updates.
        </p>
      </div>
    </section>
  );
}
