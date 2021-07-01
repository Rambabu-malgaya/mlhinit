
import discord
from discord.ext import commands, tasks
import B
import os 
from flask import Flask
from threading import Thread

app = Flask('')

@app.route('/')
def main():
    return 'SQUIDN'

def run():
    app.run(host='0.0.0.0', port=8080)

def b():
    server = Thread(target=run)
    server.start()
TOKEN=(your bots token here)
key=os.getenv('key')

wkey=os.getenv('wkey')

client = discord.Client()
client = commands.bot(command_prefix="(prefix)")
client.remove_command('help')
@client.command()
async def command(ctx):
    await ctx.send('This command was successful!')
@client.command()
async def help(ctx):
    embed = discord.Embed(name="Help", value="help command", color=0xFFFFFF)
embed.add_field(name="command", value"command description")
await ctx.send(embed=embed)
B.b()
client.run(os.getenv('TOKEN'))
