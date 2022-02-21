import math

def phi(n):
    amount = 0
    for k in range(1, n+1):
        if math.gcd(n,k) == 1:
            amount += 1
    return amount

def get_bezout_coeff(a, b): 
    if a == 0 :  
        return 0,1
             
    x1,y1 = get_bezout_coeff(b%a, a)  
    x = y1 - (b//a) * x1 
    y = x1 
     
    return x,y

def bsgs (remainder, m, inv_am, mod, b_steps):
    for i in range(0, m):
        g_step = (pow(inv_am, i, mod) * remainder)%mod
        if g_step in b_steps:
            for val in b_steps[g_step]:
                result = val + i*m
                if result != 0: # do not accept 0 shuffles
                    return result
    return -1

def solve_dlp (base, remainder, mod): 
    num_elements = phi(mod)
    m = int(num_elements**0.5) + 1
    s,t = get_bezout_coeff(base, mod)
    inv_a = s%mod
    inv_am = pow(inv_a, m, mod)

    b_steps = {}
    for i in range(m):
        val = pow(base, i, mod)
        if val in b_steps:
            b_steps[val].append(i)
        else:
            b_steps[val] = [i]

    return bsgs(remainder, m, inv_am, mod, b_steps)