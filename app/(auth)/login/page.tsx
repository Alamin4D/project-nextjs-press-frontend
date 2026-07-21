import Link from "next/link"
import LoginForm from "../_components/LoginForm"


const LoginPage = () => {
    return (
        <>
            <div className="flex min-h-screen items-center justify-center">
                <div className="w-full max-w-md space-y-6">

                    {/* FORM GENERIC TEXTS */}
                    <div className="space-y-2 text-center">
                        <h1 className="text-3xl font-bold">Welcome Back!</h1>
                        <p className="text-gray-500">
                            Enter your credentials to access your account
                        </p>
                    </div>

                    {/* FORM */}
                    <LoginForm />


                    {/* Sign In Link */}
                    <p className="mt-6 text-center text-sm text-muted-foreground">
                        Don't have an account?{' '}
                        <Link
                            href="/register"
                            className="font-medium text-primary hover:underline"
                        >
                            Sign up here
                        </Link>
                    </p>

                </div>
            </div>
        </>
    )
}

export default LoginPage
