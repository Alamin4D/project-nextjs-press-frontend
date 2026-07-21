import Link from 'next/link'
import RegisterForm from '../_components/RegisterForm'

const page = () => {
  return (
    <div className='mx-auto w-full max-w-md py-24 px-4 sm:px-6 lg:px-8'>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-center text-foreground">
          Create Account
        </h1>
        <p className="mt-2 text-muted-foreground text-center">
          Join us today and get started
        </p>
      </div>


      <RegisterForm />

      {/* Sign In Link */}
      <p className="mt-6 text-center text-sm text-muted-foreground">
        Already have an account?{' '}
        <Link
          href="/login"
          className="font-medium text-primary hover:underline"
        >
          Sign in here
        </Link>
      </p>
    </div>
  )
}

export default page