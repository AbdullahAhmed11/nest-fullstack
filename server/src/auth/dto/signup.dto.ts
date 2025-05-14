import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";


export class SignUpDto {
    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @IsNotEmpty()
    @IsEmail({}, {message: 'Email is not valid'})
    readonly email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(6, {message: 'Password is too short. Minimum length is 6 characters'})
    readonly password: string;
}