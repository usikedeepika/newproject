let n=5;
for(var i=1;i<=n;i++)
{
     for(var j=1;j<=n-i;j++)
     {
          document.write(" ");
     }
     for(var j=1;j<=i;j++)
     {
          document.write("*");
     }
     document.write("\n");
}