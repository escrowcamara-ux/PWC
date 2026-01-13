import React, { useState } from 'react';
import { NetworkNode, UserRank } from '../types';

interface NodeProps {
  node: NetworkNode;
  isRoot?: boolean;
}

const RankBadge = ({ rank }: { rank: UserRank }) => {
  const colors = {
    [UserRank.MEMBER]: 'bg-slate-600 text-white',
    [UserRank.ASSOCIATE]: 'bg-blue-600 text-white',
    [UserRank.DIRECTOR]: 'bg-purple-600 text-white',
    [UserRank.EXECUTIVE]: 'bg-gold-500 text-black font-bold',
    [UserRank.CHAIRMAN]: 'bg-black border border-gold-400 text-gold-400 font-bold',
  };

  return (
    <span className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full ${colors[rank]}`}>
      {rank}
    </span>
  );
};

const NetworkTreeNode: React.FC<NodeProps> = ({ node, isRoot = false }) => {
  const [expanded, setExpanded] = useState(true);
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div className="flex flex-col items-center">
      {/* Node Card */}
      <div 
        className={`
          relative z-10 flex flex-col items-center p-4 rounded-xl border backdrop-blur-md transition-all duration-300 cursor-pointer
          ${isRoot ? 'bg-gold-900/20 border-gold-500/50 w-64 shadow-[0_0_20px_rgba(220,182,61,0.2)]' : 'bg-slate-800/60 border-slate-600 w-48 hover:bg-slate-700'}
        `}
        onClick={() => setExpanded(!expanded)}
      >
        <div className="relative">
            <img 
                src={node.avatarUrl} 
                alt={node.name} 
                className={`w-16 h-16 rounded-full object-cover border-2 mb-2 ${isRoot ? 'border-gold-400' : 'border-slate-400'}`} 
            />
            {hasChildren && (
                <div className="absolute -bottom-1 -right-1 bg-slate-900 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center border border-slate-600">
                    {expanded ? '-' : '+'}
                </div>
            )}
        </div>
        
        <h3 className="text-sm font-semibold text-white">{node.name}</h3>
        <RankBadge rank={node.rank} />
        
        <div className="mt-2 w-full flex justify-between text-xs text-slate-400">
            <span>Vol: {node.volume.toLocaleString()}</span>
            <span>Recruits: {node.recruits}</span>
        </div>
      </div>

      {/* Connecting Line */}
      {hasChildren && expanded && (
        <div className="w-px h-8 bg-slate-500"></div>
      )}

      {/* Children Container */}
      {hasChildren && expanded && (
        <div className="flex flex-row gap-6 pt-4 border-t border-slate-500 relative">
           {/* Vertical lines for siblings handled by flex gap and top border */}
           {/* This visual trick works for simple trees. For complex D3 is better, but this is pure Tailwind/React */}
          {node.children!.map((child) => (
            <div key={child.id} className="flex flex-col items-center relative">
               {/* Little vertical connector up to the horizontal bar */}
               <div className="absolute -top-4 w-px h-4 bg-slate-500"></div>
               <NetworkTreeNode node={child} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NetworkTreeNode;