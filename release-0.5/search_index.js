var documenterSearchIndex = {"docs": [

{
    "location": "index.html#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "index.html#RigidBodyDynamics-1",
    "page": "Home",
    "title": "RigidBodyDynamics",
    "category": "section",
    "text": "RigidBodyDynamics implements various rigid body dynamics and kinematics algorithms."
},

{
    "location": "index.html#Design-features-1",
    "page": "Home",
    "title": "Design features",
    "category": "section",
    "text": "Some of the key design features of this package are:pure Julia implementation, enabling seamless support for e.g. automatic differentiation using ForwardDiff.jl and symbolic dynamics using SymPy.jl.\neasy creation and modification of general rigid body mechanisms (including basic URDF parsing).\nextensive checks that verify that coordinate systems match before computation, with the goal of making reference frame mistakes impossible\nflexible caching of intermediate results to prevent doing double work\nfairly small codebase and few dependencies\nsingularity-free rotation parameterizations"
},

{
    "location": "index.html#Functionality-1",
    "page": "Home",
    "title": "Functionality",
    "category": "section",
    "text": "Current functionality of RigidBodyDynamics includes:kinematics/transforming points and free vectors from one coordinate system to another\ntransforming wrenches, momenta (spatial force vectors) and twists and their derivatives (spatial motion vectors) from one coordinate system to another\nrelative twists/spatial accelerations between bodies\nkinetic/potential energy\ncenter of mass\ngeometric/basic/spatial Jacobians\nmomentum\nmomentum matrix\nmomentum rate bias (= momentum matrix time derivative multiplied by joint velocity vector)\nmass matrix (composite rigid body algorithm)\ninverse dynamics (recursive Newton-Euler)\ndynamics\nsimulation, either using an off-the-shelf ODE integrator or using an included custom Munthe-Kaas integrator that properly handles second-order ODEs defined on a manifold.There is currently partial support for closed-loop systems (parallel mechanisms); more features will be added soon in this area. Contact is not yet supported."
},

{
    "location": "index.html#Installation-1",
    "page": "Home",
    "title": "Installation",
    "category": "section",
    "text": ""
},

{
    "location": "index.html#Installing-Julia-1",
    "page": "Home",
    "title": "Installing Julia",
    "category": "section",
    "text": "Download links and more detailed instructions are available on the Julia website. The latest release of RigidBodyDynamics.jl requires version 0.6 of Julia (the latest stable version).warning: Warning\nDo not use apt-get or brew to install Julia, as the versions provided by these package managers tend to be out of date."
},

{
    "location": "index.html#Installing-RigidBodyDynamics-1",
    "page": "Home",
    "title": "Installing RigidBodyDynamics",
    "category": "section",
    "text": "To install the latest tagged release of RigidBodyDynamics, simply runPkg.add(\"RigidBodyDynamics\") To check out the master branch and work on the bleeding edge (generally, not recommended), additionally runPkg.checkout(\"RigidBodyDynamics\")"
},

{
    "location": "index.html#About-1",
    "page": "Home",
    "title": "About",
    "category": "section",
    "text": "This library was inspired by IHMCRoboticsToolkit and by Drake.Most of the nomenclature used and algorithms implemented by this package stem from the following resources:Murray, Richard M., et al. A mathematical introduction to robotic manipulation. CRC press, 1994.\nFeatherstone, Roy. Rigid body dynamics algorithms. Springer, 2008.\nDuindam, Vincent. Port-based modeling and control for efficient bipedal walking robots. Diss. University of Twente, 2006."
},

{
    "location": "index.html#Related-packages-1",
    "page": "Home",
    "title": "Related packages",
    "category": "section",
    "text": "RigidBodyTreeInspector.jl - 3D visualization of RigidBodyDynamics.jl Mechanisms using Director."
},

{
    "location": "index.html#Contents-1",
    "page": "Home",
    "title": "Contents",
    "category": "section",
    "text": "Pages = [\n  \"quickstart.md\",\n  \"spatial.md\",\n  \"joints.md\",\n  \"rigidbody.md\",\n  \"mechanism.md\",\n  \"mechanismstate.md\",\n  \"algorithms.md\",\n  \"statecache.md\",\n  \"simulation.md\",\n  \"benchmarks.md\"]\nDepth = 2"
},

{
    "location": "index.html#Citing-this-library-1",
    "page": "Home",
    "title": "Citing this library",
    "category": "section",
    "text": "@misc{rigidbodydynamicsjl,\n author = \"Twan Koolen and contributors\",\n title = \"RigidBodyDynamics.jl\",\n year = 2016,\n url = \"https://github.com/tkoolen/RigidBodyDynamics.jl\"\n}"
},

{
    "location": "quickstart.html#",
    "page": "Quick start guide",
    "title": "Quick start guide",
    "category": "page",
    "text": ""
},

{
    "location": "quickstart.html#Quick-start-guide-1",
    "page": "Quick start guide",
    "title": "Quick start guide",
    "category": "section",
    "text": "To get started, see this Jupyter notebook.If you\'re interested in using different scalar types, see the symbolic double pendulum notebook."
},

{
    "location": "spatial.html#",
    "page": "Spatial vector algebra",
    "title": "Spatial vector algebra",
    "category": "page",
    "text": ""
},

{
    "location": "spatial.html#Spatial-vector-algebra-1",
    "page": "Spatial vector algebra",
    "title": "Spatial vector algebra",
    "category": "section",
    "text": ""
},

{
    "location": "spatial.html#Index-1",
    "page": "Spatial vector algebra",
    "title": "Index",
    "category": "section",
    "text": "Pages   = [\"spatial.md\"]\nOrder   = [:type, :function, :macro]"
},

{
    "location": "spatial.html#Types-1",
    "page": "Spatial vector algebra",
    "title": "Types",
    "category": "section",
    "text": ""
},

{
    "location": "spatial.html#RigidBodyDynamics.Spatial.CartesianFrame3D",
    "page": "Spatial vector algebra",
    "title": "RigidBodyDynamics.Spatial.CartesianFrame3D",
    "category": "Type",
    "text": "bitstype 64 CartesianFrame3D\n\nA CartesianFrame3D identifies a three-dimensional Cartesian coordinate system.\n\nCartesianFrame3Ds are typically used to annotate the frame in which certain quantities are expressed.\n\n\n\n"
},

{
    "location": "spatial.html#Coordinate-frames-1",
    "page": "Spatial vector algebra",
    "title": "Coordinate frames",
    "category": "section",
    "text": "CartesianFrame3D"
},

{
    "location": "spatial.html#RigidBodyDynamics.Spatial.Transform3D",
    "page": "Spatial vector algebra",
    "title": "RigidBodyDynamics.Spatial.Transform3D",
    "category": "Type",
    "text": "struct Transform3D{T}\n\nA homogeneous transformation matrix representing the transformation from one three-dimensional Cartesian coordinate system to another.\n\n\n\n"
},

{
    "location": "spatial.html#Transforms-1",
    "page": "Spatial vector algebra",
    "title": "Transforms",
    "category": "section",
    "text": "Transform3D"
},

{
    "location": "spatial.html#RigidBodyDynamics.Spatial.Point3D",
    "page": "Spatial vector algebra",
    "title": "RigidBodyDynamics.Spatial.Point3D",
    "category": "Type",
    "text": "struct Point3D{V<:(AbstractArray{T,1} where T)}\n\nA Point3D represents a position in a given coordinate system.\n\nA Point3D is a bound vector. Applying a Transform3D to a Point3D both rotates and translates the Point3D.\n\n\n\n"
},

{
    "location": "spatial.html#RigidBodyDynamics.Spatial.FreeVector3D",
    "page": "Spatial vector algebra",
    "title": "RigidBodyDynamics.Spatial.FreeVector3D",
    "category": "Type",
    "text": "struct FreeVector3D{V<:(AbstractArray{T,1} where T)}\n\nA FreeVector3D represents a free vector.\n\nExamples of free vectors include displacements and velocities of points.\n\nApplying a Transform3D to a FreeVector3D only rotates the FreeVector3D.\n\n\n\n"
},

{
    "location": "spatial.html#Points,-free-vectors-1",
    "page": "Spatial vector algebra",
    "title": "Points, free vectors",
    "category": "section",
    "text": "Point3D\nFreeVector3D"
},

{
    "location": "spatial.html#RigidBodyDynamics.Spatial.SpatialInertia",
    "page": "Spatial vector algebra",
    "title": "RigidBodyDynamics.Spatial.SpatialInertia",
    "category": "Type",
    "text": "struct SpatialInertia{T}\n\nA spatial inertia, or inertia matrix, represents the mass distribution of a rigid body.\n\nA spatial inertia expressed in frame i is defined as:\n\nI^i =\nint_Brholeft(xright)leftbeginarraycc\nhatp^Tleft(xright)hatpleft(xright)  hatpleft(xright)\nhatp^Tleft(xright)  I\nendarrayrightdx=leftbeginarraycc\nJ  hatc\nhatc^T  mI\nendarrayright\n\nwhere rho(x) is the density of point x, and p(x) are the coordinates of point x expressed in frame i. J is the mass moment of inertia, m is the total mass, and c is the \'cross part\', center of mass position scaled by m.\n\n\n\n"
},

{
    "location": "spatial.html#Inertias-1",
    "page": "Spatial vector algebra",
    "title": "Inertias",
    "category": "section",
    "text": "SpatialInertia"
},

{
    "location": "spatial.html#RigidBodyDynamics.Spatial.Twist",
    "page": "Spatial vector algebra",
    "title": "RigidBodyDynamics.Spatial.Twist",
    "category": "Type",
    "text": "struct Twist{T}\n\nA twist represents the relative angular and linear motion between two bodies.\n\nThe twist of frame j with respect to frame i, expressed in frame k is defined as\n\nT_j^ki=left(beginarrayc\nomega_j^ki\nv_j^ki\nendarrayright)inmathbbR^6\n\nsuch that\n\nleftbeginarraycc\nhatomega_j^ki  v_j^ki\n0  0\nendarrayright=H_i^kdotH_j^iH_k^j\n\nwhere H^beta_alpha is the homogeneous transform from frame alpha to frame beta, and hatx is the 3 times 3 skew symmetric matrix that satisfies hatx y = x times y for all y in mathbbR^3.\n\nHere, omega_j^ki is the angular part and v_j^ki is the linear part. Note that the linear part is not in general the same as the linear velocity of the origin of frame j.\n\n\n\n"
},

{
    "location": "spatial.html#RigidBodyDynamics.Spatial.SpatialAcceleration",
    "page": "Spatial vector algebra",
    "title": "RigidBodyDynamics.Spatial.SpatialAcceleration",
    "category": "Type",
    "text": "struct SpatialAcceleration{T}\n\nA spatial acceleration is the time derivative of a twist.\n\nSee Twist.\n\n\n\n"
},

{
    "location": "spatial.html#Twists,-spatial-accelerations-1",
    "page": "Spatial vector algebra",
    "title": "Twists, spatial accelerations",
    "category": "section",
    "text": "Twist\nSpatialAcceleration"
},

{
    "location": "spatial.html#RigidBodyDynamics.Spatial.Momentum",
    "page": "Spatial vector algebra",
    "title": "RigidBodyDynamics.Spatial.Momentum",
    "category": "Type",
    "text": "struct Momentum{T}\n\nA Momentum is the product of a SpatialInertia and a Twist, i.e.\n\nh^i =\nleft(beginarrayc\nk^i\nl^i\nendarrayright) =\nI^i T^i j_k\n\nwhere I^i is the spatial inertia of a given body expressed in frame i, and T^i j_k is the twist of frame k (attached to the body) with respect to inertial frame j, expressed in frame i. k^i is the angular momentum and l^i is the linear momentum.\n\n\n\n"
},

{
    "location": "spatial.html#RigidBodyDynamics.Spatial.Wrench",
    "page": "Spatial vector algebra",
    "title": "RigidBodyDynamics.Spatial.Wrench",
    "category": "Type",
    "text": "struct Wrench{T}\n\nA wrench represents a system of forces.\n\nThe wrench w^i expressed in frame i is defined as\n\nw^i =\nleft(beginarrayc\ntau^i\nf^i\nendarrayright) =\nsum_jleft(beginarrayc\nr_j^itimes f_j^i\nf_j^i\nendarrayright)\n\nwhere the f_j^i are forces expressed in frame i, exerted at positions r_j^i. tau^i is the total torque and f^i is the total force.\n\n\n\n"
},

{
    "location": "spatial.html#Momenta,-wrenches-1",
    "page": "Spatial vector algebra",
    "title": "Momenta, wrenches",
    "category": "section",
    "text": "Momentum\nWrench"
},

{
    "location": "spatial.html#RigidBodyDynamics.Spatial.GeometricJacobian",
    "page": "Spatial vector algebra",
    "title": "RigidBodyDynamics.Spatial.GeometricJacobian",
    "category": "Type",
    "text": "struct GeometricJacobian{A<:(AbstractArray{T,2} where T)}\n\nA geometric Jacobian (also known as basic, or spatial Jacobian) maps a vector of joint velocities to a twist.\n\n\n\n"
},

{
    "location": "spatial.html#Geometric-Jacobians-1",
    "page": "Spatial vector algebra",
    "title": "Geometric Jacobians",
    "category": "section",
    "text": "GeometricJacobian"
},

{
    "location": "spatial.html#RigidBodyDynamics.Spatial.MomentumMatrix",
    "page": "Spatial vector algebra",
    "title": "RigidBodyDynamics.Spatial.MomentumMatrix",
    "category": "Type",
    "text": "struct MomentumMatrix{A<:(AbstractArray{T,2} where T)}\n\nA momentum matrix maps a joint velocity vector to momentum.\n\nThis is a slight generalization of the centroidal momentum matrix (Orin, Goswami, \"Centroidal momentum matrix of a humanoid robot: Structure and properties.\") in that the matrix (and hence the corresponding total momentum) need not be expressed in a centroidal frame.\n\n\n\n"
},

{
    "location": "spatial.html#Momentum-matrices-1",
    "page": "Spatial vector algebra",
    "title": "Momentum matrices",
    "category": "section",
    "text": "MomentumMatrix"
},

{
    "location": "spatial.html#RigidBodyDynamics.Spatial.@framecheck",
    "page": "Spatial vector algebra",
    "title": "RigidBodyDynamics.Spatial.@framecheck",
    "category": "Macro",
    "text": "@framecheck(f1, f2s)\n\n\nCheck that CartesianFrame3D f1 is one of f2s.\n\nNote that if f2s is a CartesianFrame3D, then f1 and f2s are simply checked for equality.\n\nThrows an ArgumentError if f1 is not among f2s when bounds checks are enabled. @framecheck is a no-op when bounds checks are disabled.\n\n\n\n"
},

{
    "location": "spatial.html#The-@framecheck-macro-1",
    "page": "Spatial vector algebra",
    "title": "The @framecheck macro",
    "category": "section",
    "text": "@framecheck"
},

{
    "location": "spatial.html#RigidBodyDynamics.Spatial.center_of_mass-Tuple{RigidBodyDynamics.Spatial.SpatialInertia}",
    "page": "Spatial vector algebra",
    "title": "RigidBodyDynamics.Spatial.center_of_mass",
    "category": "Method",
    "text": "center_of_mass(inertia)\n\n\nReturn the center of mass of the SpatialInertia as a Point3D.\n\n\n\n"
},

{
    "location": "spatial.html#RigidBodyDynamics.Spatial.kinetic_energy-Tuple{RigidBodyDynamics.Spatial.SpatialInertia,RigidBodyDynamics.Spatial.Twist}",
    "page": "Spatial vector algebra",
    "title": "RigidBodyDynamics.Spatial.kinetic_energy",
    "category": "Method",
    "text": "kinetic_energy(inertia, twist)\n\n\nCompute the kinetic energy of a body with spatial inertia I, which has twist T with respect to an inertial frame.\n\n\n\n"
},

{
    "location": "spatial.html#RigidBodyDynamics.Spatial.log_with_time_derivative-Tuple{RigidBodyDynamics.Spatial.Transform3D,RigidBodyDynamics.Spatial.Twist}",
    "page": "Spatial vector algebra",
    "title": "RigidBodyDynamics.Spatial.log_with_time_derivative",
    "category": "Method",
    "text": "log_with_time_derivative(t, twist)\n\n\nCompute exponential coordinates as well as their time derivatives in one shot. This mainly exists because ForwardDiff won\'t work at the singularity of log. It is also ~50% faster than ForwardDiff in this case.\n\n\n\n"
},

{
    "location": "spatial.html#RigidBodyDynamics.Spatial.newton_euler-Tuple{RigidBodyDynamics.Spatial.SpatialInertia,RigidBodyDynamics.Spatial.SpatialAcceleration,RigidBodyDynamics.Spatial.Twist}",
    "page": "Spatial vector algebra",
    "title": "RigidBodyDynamics.Spatial.newton_euler",
    "category": "Method",
    "text": "newton_euler(inertia, spatial_accel, twist)\n\n\nApply the Newton-Euler equations to find the external wrench required to make a body with spatial inertia I, which has twist T with respect to an inertial frame, achieve spatial acceleration dotT.\n\nThis wrench is also equal to the rate of change of momentum of the body.\n\n\n\n"
},

{
    "location": "spatial.html#RigidBodyDynamics.Spatial.point_velocity-Tuple{RigidBodyDynamics.Spatial.Twist,RigidBodyDynamics.Spatial.Point3D}",
    "page": "Spatial vector algebra",
    "title": "RigidBodyDynamics.Spatial.point_velocity",
    "category": "Method",
    "text": "point_velocity(twist, point)\n\n\nGiven a twist T_j^ki of frame j with respect to frame i, expressed in frame k, and the location of a point fixed in frame j, also expressed in frame k, compute the velocity of the point relative to frame i.\n\n\n\n"
},

{
    "location": "spatial.html#RigidBodyDynamics.Spatial.transform-Tuple{RigidBodyDynamics.Spatial.FreeVector3D,RigidBodyDynamics.Spatial.Transform3D}",
    "page": "Spatial vector algebra",
    "title": "RigidBodyDynamics.Spatial.transform",
    "category": "Method",
    "text": "transform(x, t)\n\n\nReturn x transformed to CartesianFrame3D t.from.\n\n\n\n"
},

{
    "location": "spatial.html#RigidBodyDynamics.Spatial.transform-Tuple{RigidBodyDynamics.Spatial.GeometricJacobian,RigidBodyDynamics.Spatial.Transform3D}",
    "page": "Spatial vector algebra",
    "title": "RigidBodyDynamics.Spatial.transform",
    "category": "Method",
    "text": "transform(jac, tf)\n\n\nTransform the GeometricJacobian to a different frame.\n\n\n\n"
},

{
    "location": "spatial.html#RigidBodyDynamics.Spatial.transform-Tuple{RigidBodyDynamics.Spatial.Momentum,RigidBodyDynamics.Spatial.Transform3D}",
    "page": "Spatial vector algebra",
    "title": "RigidBodyDynamics.Spatial.transform",
    "category": "Method",
    "text": "transform(f, tf)\n\n\nTransform the Momentum to a different frame.\n\n\n\n"
},

{
    "location": "spatial.html#RigidBodyDynamics.Spatial.transform-Tuple{RigidBodyDynamics.Spatial.Point3D,RigidBodyDynamics.Spatial.Transform3D}",
    "page": "Spatial vector algebra",
    "title": "RigidBodyDynamics.Spatial.transform",
    "category": "Method",
    "text": "transform(x, t)\n\n\nReturn x transformed to CartesianFrame3D t.from.\n\n\n\n"
},

{
    "location": "spatial.html#RigidBodyDynamics.Spatial.transform-Tuple{RigidBodyDynamics.Spatial.SpatialAcceleration,RigidBodyDynamics.Spatial.Transform3D,RigidBodyDynamics.Spatial.Twist,RigidBodyDynamics.Spatial.Twist}",
    "page": "Spatial vector algebra",
    "title": "RigidBodyDynamics.Spatial.transform",
    "category": "Method",
    "text": "transform(accel, old_to_new, twist_of_current_wrt_new, twist_of_body_wrt_base)\n\n\nTransform the SpatialAcceleration to a different frame.\n\nThe transformation rule is obtained by differentiating the transformation rule for twists.\n\n\n\n"
},

{
    "location": "spatial.html#RigidBodyDynamics.Spatial.transform-Tuple{RigidBodyDynamics.Spatial.SpatialInertia,RigidBodyDynamics.Spatial.Transform3D}",
    "page": "Spatial vector algebra",
    "title": "RigidBodyDynamics.Spatial.transform",
    "category": "Method",
    "text": "transform(inertia, t)\n\n\nTransform the SpatialInertia to a different frame.\n\n\n\n"
},

{
    "location": "spatial.html#RigidBodyDynamics.Spatial.transform-Tuple{RigidBodyDynamics.Spatial.Twist,RigidBodyDynamics.Spatial.Transform3D}",
    "page": "Spatial vector algebra",
    "title": "RigidBodyDynamics.Spatial.transform",
    "category": "Method",
    "text": "transform(twist, tf)\n\n\nTransform the Twist to a different frame.\n\n\n\n"
},

{
    "location": "spatial.html#RigidBodyDynamics.Spatial.transform-Tuple{RigidBodyDynamics.Spatial.Wrench,RigidBodyDynamics.Spatial.Transform3D}",
    "page": "Spatial vector algebra",
    "title": "RigidBodyDynamics.Spatial.transform",
    "category": "Method",
    "text": "transform(f, tf)\n\n\nTransform the Wrench to a different frame.\n\n\n\n"
},

{
    "location": "spatial.html#Base.LinAlg.dot-Tuple{RigidBodyDynamics.Spatial.Wrench,RigidBodyDynamics.Spatial.Twist}",
    "page": "Spatial vector algebra",
    "title": "Base.LinAlg.dot",
    "category": "Method",
    "text": "dot(w, t)\n\n\nCompute the mechanical power associated with a pairing of a wrench and a twist.\n\n\n\n"
},

{
    "location": "spatial.html#Base.exp-Tuple{RigidBodyDynamics.Spatial.Twist}",
    "page": "Spatial vector algebra",
    "title": "Base.exp",
    "category": "Method",
    "text": "exp(twist)\n\n\nConvert exponential coordinates to a homogeneous transform.\n\n\n\n"
},

{
    "location": "spatial.html#Base.log-Tuple{RigidBodyDynamics.Spatial.Transform3D}",
    "page": "Spatial vector algebra",
    "title": "Base.log",
    "category": "Method",
    "text": "log(t)\n\n\nExpress a homogeneous transform in exponential coordinates centered around the identity.\n\n\n\n"
},

{
    "location": "spatial.html#RigidBodyDynamics.Spatial.colwise-Tuple{Any,AbstractArray{T,1} where T,AbstractArray{T,2} where T}",
    "page": "Spatial vector algebra",
    "title": "RigidBodyDynamics.Spatial.colwise",
    "category": "Method",
    "text": "colwise(f, vec, mat) Return a matrix A such that A[:, i] == f(vec, mat[:, i]).\n\n\n\n"
},

{
    "location": "spatial.html#RigidBodyDynamics.Spatial.colwise-Tuple{Any,StaticArrays.StaticArray,StaticArrays.StaticArray{Tuple{N},T,1} where T where N}",
    "page": "Spatial vector algebra",
    "title": "RigidBodyDynamics.Spatial.colwise",
    "category": "Method",
    "text": "colwise(f, mat, vec) Return a matrix A such that A[:, i] == f(mat[:, i], vec).\n\n\n\n"
},

{
    "location": "spatial.html#RigidBodyDynamics.Spatial.colwise-Tuple{Any,StaticArrays.StaticArray{Tuple{N},T,1} where T where N,StaticArrays.StaticArray}",
    "page": "Spatial vector algebra",
    "title": "RigidBodyDynamics.Spatial.colwise",
    "category": "Method",
    "text": "colwise(f, vec, mat) Return a matrix A such that A[:, i] == f(vec, mat[:, i]).\n\n\n\n"
},

{
    "location": "spatial.html#Functions-1",
    "page": "Spatial vector algebra",
    "title": "Functions",
    "category": "section",
    "text": "Modules = [RigidBodyDynamics.Spatial]\nOrder   = [:function]"
},

{
    "location": "joints.html#",
    "page": "Joints",
    "title": "Joints",
    "category": "page",
    "text": ""
},

{
    "location": "joints.html#Joints-1",
    "page": "Joints",
    "title": "Joints",
    "category": "section",
    "text": ""
},

{
    "location": "joints.html#Index-1",
    "page": "Joints",
    "title": "Index",
    "category": "section",
    "text": "Pages   = [\"joints.md\"]\nOrder   = [:type, :function]"
},

{
    "location": "joints.html#RigidBodyDynamics.Joint",
    "page": "Joints",
    "title": "RigidBodyDynamics.Joint",
    "category": "Type",
    "text": "struct Joint{T, JT<:RigidBodyDynamics.JointType{T}}\n\nA joint represents a kinematic restriction of the relative twist between two rigid bodies to a linear subspace of dimension k.\n\nA joint has a direction. The rigid body before the joint is called the joint\'s predecessor, and the rigid body after the joint is its successor.\n\nThe state related to the joint is parameterized by two sets of variables, namely\n\na vector q in  mathcalQ, parameterizing the relative homogeneous transform.\na vector v in mathbbR^k, parameterizing the relative twist.\n\nThe twist of the successor with respect to the predecessor is a linear function of v.\n\nFor some joint types (notably those using a redundant representation of relative orientation, such as a unit quaternion), dotq, the time derivative of q, may not be the same as v. However, an invertible linear transformation exists between dotq and v.\n\nSee also:\n\nDefinition 2.9 in Duindam, \"Port-Based Modeling and Control for Efficient Bipedal Walking Robots\", 2006.\nSection 4.4 of Featherstone, \"Rigid Body Dynamics Algorithms\", 2008.\n\n\n\n"
},

{
    "location": "joints.html#The-Joint-type-1",
    "page": "Joints",
    "title": "The Joint type",
    "category": "section",
    "text": "Joint"
},

{
    "location": "joints.html#RigidBodyDynamics.bias_acceleration-Tuple{RigidBodyDynamics.Joint,AbstractArray{T,1} where T,AbstractArray{T,1} where T}",
    "page": "Joints",
    "title": "RigidBodyDynamics.bias_acceleration",
    "category": "Method",
    "text": "bias_acceleration(joint, q, v)\n\n\nReturn the acceleration of the joint\'s successor with respect to its predecessor in configuration q and at velocity v, when the joint acceleration dotv is zero.\n\n\n\n"
},

{
    "location": "joints.html#RigidBodyDynamics.configuration_derivative_to_velocity!-Tuple{AbstractArray{T,1} where T,RigidBodyDynamics.Joint,AbstractArray{T,1} where T,AbstractArray{T,1} where T}",
    "page": "Joints",
    "title": "RigidBodyDynamics.configuration_derivative_to_velocity!",
    "category": "Method",
    "text": "configuration_derivative_to_velocity!(v, joint, q, q̇)\n\n\nCompute joint velocity vector v given the joint configuration vector q and its time derivative dotq (in place).\n\nNote that this mapping is linear.\n\nSee also velocity_to_configuration_derivative!, the inverse mapping.\n\n\n\n"
},

{
    "location": "joints.html#RigidBodyDynamics.configuration_derivative_to_velocity_adjoint!-Tuple{Any,RigidBodyDynamics.Joint,AbstractArray{T,1} where T,Any}",
    "page": "Joints",
    "title": "RigidBodyDynamics.configuration_derivative_to_velocity_adjoint!",
    "category": "Method",
    "text": "configuration_derivative_to_velocity_adjoint!(fq, joint, q, fv)\n\n\nGiven  a linear function\n\nf(v) = langle f_v v rangle\n\nwhere v is the joint velocity vector, return a vector f_q such that\n\nlangle f_v v rangle = langle f_q dotq(v) rangle\n\nNote: since v is a linear function of dotq (see configuration_derivative_to_velocity!), we can write v = V_q dotq, so\n\nlangle f_v v rangle = langle f_v V_q dotq rangle = langle V_q^* f_v dotq rangle\n\nso f_q = V_q^* f_v.\n\n\n\n"
},

{
    "location": "joints.html#RigidBodyDynamics.constraint_wrench_subspace-Tuple{RigidBodyDynamics.Joint,RigidBodyDynamics.Spatial.Transform3D}",
    "page": "Joints",
    "title": "RigidBodyDynamics.constraint_wrench_subspace",
    "category": "Method",
    "text": "constraint_wrench_subspace(joint, joint_transform)\n\n\nReturn a basis for the constraint wrench subspace of the joint, where joint_transform is the transform from the frame after the joint to the frame before the joint.\n\nThe constraint wrench subspace is a 6 times (6 - k) matrix, where k is the dimension of the velocity vector v, that maps a vector of Lagrange multipliers lambda to the constraint wrench exerted across the joint onto its successor.\n\nThe constraint wrench subspace is orthogonal to the motion subspace.\n\n\n\n"
},

{
    "location": "joints.html#RigidBodyDynamics.effort_bounds-Tuple{RigidBodyDynamics.Joint}",
    "page": "Joints",
    "title": "RigidBodyDynamics.effort_bounds",
    "category": "Method",
    "text": "effort_bounds(joint)\n\n\nReturn a Vector{Bounds{T}} giving the upper and lower bounds of the effort for joint\n\n\n\n"
},

{
    "location": "joints.html#RigidBodyDynamics.global_coordinates!-Tuple{AbstractArray{T,1} where T,RigidBodyDynamics.Joint,AbstractArray{T,1} where T,AbstractArray{T,1} where T}",
    "page": "Joints",
    "title": "RigidBodyDynamics.global_coordinates!",
    "category": "Method",
    "text": "global_coordinates!(q, joint, q0, ϕ)\n\n\nCompute the global parameterization of the joint\'s configuration, q, given a \'base\' orientation q_0 and a vector of local coordinates  centered around q_0.\n\nSee also local_coordinates!.\n\n\n\n"
},

{
    "location": "joints.html#RigidBodyDynamics.has_fixed_subspaces-Tuple{RigidBodyDynamics.Joint}",
    "page": "Joints",
    "title": "RigidBodyDynamics.has_fixed_subspaces",
    "category": "Method",
    "text": "has_fixed_subspaces(joint)\n\n\nWhether the joint\'s motion subspace and constraint wrench subspace depend on q.\n\n\n\n"
},

{
    "location": "joints.html#RigidBodyDynamics.isfloating-Tuple{RigidBodyDynamics.Joint}",
    "page": "Joints",
    "title": "RigidBodyDynamics.isfloating",
    "category": "Method",
    "text": "isfloating(joint)\n\n\nWhether the joint is a floating joint, i.e., whether it imposes no constraints on the relative motions of its successor and predecessor bodies.\n\n\n\n"
},

{
    "location": "joints.html#RigidBodyDynamics.joint_transform-Tuple{RigidBodyDynamics.Joint,AbstractArray{T,1} where T}",
    "page": "Joints",
    "title": "RigidBodyDynamics.joint_transform",
    "category": "Method",
    "text": "joint_transform(joint, q)\n\n\nReturn a Transform3D representing the homogeneous transform from the frame after the joint to the frame before the joint for joint configuration vector q.\n\n\n\n"
},

{
    "location": "joints.html#RigidBodyDynamics.local_coordinates!-Tuple{AbstractArray{T,1} where T,AbstractArray{T,1} where T,RigidBodyDynamics.Joint,AbstractArray{T,1} where T,AbstractArray{T,1} where T,AbstractArray{T,1} where T}",
    "page": "Joints",
    "title": "RigidBodyDynamics.local_coordinates!",
    "category": "Method",
    "text": "local_coordinates!(ϕ, ϕ̇, joint, q0, q, v)\n\n\nCompute a vector of local coordinates phi around configuration q_0 corresponding to configuration q (in place). Also compute the time derivative dotphi of phi given the joint velocity vector v.\n\nThe local coordinate vector phi must be zero if and only if q = q_0.\n\nFor revolute or prismatic joint types, the local coordinates can just be phi = q - q_0, but for joint types with configuration vectors that are restricted to a manifold (e.g. when unit quaternions are used to represent orientation), elementwise subtraction may not make sense. For such joints, exponential coordinates could be used as the local coordinate vector phi.\n\nSee also global_coordinates!.\n\n\n\n"
},

{
    "location": "joints.html#RigidBodyDynamics.motion_subspace-Tuple{RigidBodyDynamics.Joint,AbstractArray{T,1} where T}",
    "page": "Joints",
    "title": "RigidBodyDynamics.motion_subspace",
    "category": "Method",
    "text": "motion_subspace(joint, q)\n\n\nReturn a basis for the motion subspace of the joint in configuration q.\n\nThe motion subspace basis is a 6 times  k matrix, where k is the dimension of the velocity vector v, that maps v to the twist of the joint\'s successor with respect to its predecessor. The returned motion subspace is expressed in the frame after the joint, which is attached to the joint\'s successor.\n\n\n\n"
},

{
    "location": "joints.html#RigidBodyDynamics.normalize_configuration!-Tuple{AbstractArray{T,1} where T,RigidBodyDynamics.Joint}",
    "page": "Joints",
    "title": "RigidBodyDynamics.normalize_configuration!",
    "category": "Method",
    "text": "normalize_configuration!(q, joint)\n\n\nRenormalize the configuration vector q associated with joint so that it lies on the joint\'s configuration manifold.\n\n\n\n"
},

{
    "location": "joints.html#RigidBodyDynamics.num_constraints-Tuple{RigidBodyDynamics.Joint}",
    "page": "Joints",
    "title": "RigidBodyDynamics.num_constraints",
    "category": "Method",
    "text": "num_constraints(joint)\n\n\nReturn the number of constraints imposed on the relative twist between the joint\'s predecessor and successor\n\n\n\n"
},

{
    "location": "joints.html#RigidBodyDynamics.num_positions-Tuple{RigidBodyDynamics.Joint}",
    "page": "Joints",
    "title": "RigidBodyDynamics.num_positions",
    "category": "Method",
    "text": "num_positions(joint)\n\n\nReturn the length of the configuration vector of joint.\n\n\n\n"
},

{
    "location": "joints.html#RigidBodyDynamics.num_velocities-Tuple{RigidBodyDynamics.Joint}",
    "page": "Joints",
    "title": "RigidBodyDynamics.num_velocities",
    "category": "Method",
    "text": "num_velocities(joint)\n\n\nReturn the length of the velocity vector of joint.\n\n\n\n"
},

{
    "location": "joints.html#RigidBodyDynamics.position_bounds-Tuple{RigidBodyDynamics.Joint}",
    "page": "Joints",
    "title": "RigidBodyDynamics.position_bounds",
    "category": "Method",
    "text": "position_bounds(joint)\n\n\nReturn a Vector{Bounds{T}} giving the upper and lower bounds of the configuration for joint\n\n\n\n"
},

{
    "location": "joints.html#RigidBodyDynamics.rand_configuration!-Tuple{AbstractArray{T,1} where T,RigidBodyDynamics.Joint}",
    "page": "Joints",
    "title": "RigidBodyDynamics.rand_configuration!",
    "category": "Method",
    "text": "rand_configuration!(q, joint)\n\n\nSet q to a random configuration. The distribution used depends on the joint type.\n\n\n\n"
},

{
    "location": "joints.html#RigidBodyDynamics.velocity_bounds-Tuple{RigidBodyDynamics.Joint}",
    "page": "Joints",
    "title": "RigidBodyDynamics.velocity_bounds",
    "category": "Method",
    "text": "velocity_bounds(joint)\n\n\nReturn a Vector{Bounds{T}} giving the upper and lower bounds of the velocity for joint\n\n\n\n"
},

{
    "location": "joints.html#RigidBodyDynamics.velocity_to_configuration_derivative!-Tuple{AbstractArray{T,1} where T,RigidBodyDynamics.Joint,AbstractArray{T,1} where T,AbstractArray{T,1} where T}",
    "page": "Joints",
    "title": "RigidBodyDynamics.velocity_to_configuration_derivative!",
    "category": "Method",
    "text": "velocity_to_configuration_derivative!(q̇, joint, q, v)\n\n\nCompute the time derivative dotq of the joint configuration vector q given q and the joint velocity vector v (in place).\n\nNote that this mapping is linear.\n\nSee also configuration_derivative_to_velocity!, the inverse mapping.\n\n\n\n"
},

{
    "location": "joints.html#RigidBodyDynamics.zero_configuration!-Tuple{AbstractArray{T,1} where T,RigidBodyDynamics.Joint}",
    "page": "Joints",
    "title": "RigidBodyDynamics.zero_configuration!",
    "category": "Method",
    "text": "zero_configuration!(q, joint)\n\n\nSet q to the \'zero\' configuration, corresponding to an identity joint transform.\n\n\n\n"
},

{
    "location": "joints.html#RigidBodyDynamics.joint_spatial_acceleration-Tuple{RigidBodyDynamics.Joint,AbstractArray{T,1} where T,AbstractArray{T,1} where T,AbstractArray{T,1} where T}",
    "page": "Joints",
    "title": "RigidBodyDynamics.joint_spatial_acceleration",
    "category": "Method",
    "text": "joint_spatial_acceleration(joint, q, v, vd)\n\n\nReturn the spatial acceleration of joint\'s  successor with respect to its predecessor, expressed in the frame after the joint.\n\n\n\n"
},

{
    "location": "joints.html#RigidBodyDynamics.joint_torque!-Tuple{AbstractArray{T,1} where T,RigidBodyDynamics.Joint,AbstractArray{T,1} where T,RigidBodyDynamics.Spatial.Wrench}",
    "page": "Joints",
    "title": "RigidBodyDynamics.joint_torque!",
    "category": "Method",
    "text": "joint_torque!(τ, joint, q, joint_wrench)\n\n\nGiven the wrench exerted across the joint on the joint\'s successor, compute the vector of joint torques tau (in place), in configuration q.\n\n\n\n"
},

{
    "location": "joints.html#RigidBodyDynamics.joint_twist-Tuple{RigidBodyDynamics.Joint,AbstractArray{T,1} where T,AbstractArray{T,1} where T}",
    "page": "Joints",
    "title": "RigidBodyDynamics.joint_twist",
    "category": "Method",
    "text": "joint_twist(joint, q, v)\n\n\nReturn the twist of joint\'s  successor with respect to its predecessor, expressed in the frame after the joint.\n\nNote that this is the same as Twist(motion_subspace(joint, q), v).\n\n\n\n"
},

{
    "location": "joints.html#Functions-1",
    "page": "Joints",
    "title": "Functions",
    "category": "section",
    "text": "Modules = [RigidBodyDynamics]\nOrder   = [:function]\nPages   = [\"joint.jl\"]"
},

{
    "location": "joints.html#RigidBodyDynamics.QuaternionFloating",
    "page": "Joints",
    "title": "RigidBodyDynamics.QuaternionFloating",
    "category": "Type",
    "text": "struct QuaternionFloating{T} <: RigidBodyDynamics.JointType{T}\n\nA floating joint type that uses a unit quaternion representation for orientation.\n\nFloating joints are 6-degree-of-freedom joints that are in a sense degenerate, as they impose no constraints on the relative motion between two bodies.\n\nThe full, 7-dimensional configuration vector of a QuaternionFloating joint type consists of a unit quaternion representing the orientation that rotates vectors from the frame \'directly after\' the joint to the frame \'directly before\' it, and a 3D position vector representing the origin of the frame after the joint in the frame before the joint.\n\nThe 6-dimensional velocity vector of a QuaternionFloating joint is the twist of the frame after the joint with respect to the frame before it, expressed in the frame after the joint.\n\n\n\n"
},

{
    "location": "joints.html#RigidBodyDynamics.Revolute",
    "page": "Joints",
    "title": "RigidBodyDynamics.Revolute",
    "category": "Type",
    "text": "struct Revolute{T} <: RigidBodyDynamics.OneDegreeOfFreedomFixedAxis{T}\n\nA Revolute joint type allows rotation about a fixed axis.\n\n\n\n"
},

{
    "location": "joints.html#RigidBodyDynamics.Prismatic",
    "page": "Joints",
    "title": "RigidBodyDynamics.Prismatic",
    "category": "Type",
    "text": "struct Prismatic{T} <: RigidBodyDynamics.OneDegreeOfFreedomFixedAxis{T}\n\nA Prismatic joint type allows translation along a fixed axis.\n\n\n\n"
},

{
    "location": "joints.html#RigidBodyDynamics.Fixed",
    "page": "Joints",
    "title": "RigidBodyDynamics.Fixed",
    "category": "Type",
    "text": "struct Fixed{T} <: RigidBodyDynamics.JointType{T}\n\nThe Fixed joint type is a degenerate joint type, in the sense that it allows no motion between its predecessor and successor rigid bodies.\n\n\n\n"
},

{
    "location": "joints.html#RigidBodyDynamics.Planar",
    "page": "Joints",
    "title": "RigidBodyDynamics.Planar",
    "category": "Type",
    "text": "struct Planar{T} <: RigidBodyDynamics.JointType{T}\n\nThe Planar joint type allows translation along two orthogonal vectors, referred to as x and y, as well as rotation about an axis z = x times y.\n\nThe components of the 3-dimensional configuration vector q associated with a Planar joint are the x- and y-coordinates of the translation, and the angle of rotation theta about z, in that order.\n\nThe components of the 3-dimension velocity vector v associated with a Planar joint are the x- and y-coordinates of the linear part of the joint twist, expressed in the frame after the joint, followed by the z-component of the angular part of this joint twist.\n\nwarning: Warning\nFor the Planar joint type, v neq dotq! Although the angular parts of v and dotq are the same, their linear parts differ. The linear part of v is the linear part of dotq, rotated to the frame after the joint. This parameterization was chosen to allow the translational component of the joint transform to be independent of the rotation angle theta (i.e., the rotation is applied after the translation), while still retaining a constant motion subspace expressed in the frame after the joint.\n\n\n\n"
},

{
    "location": "joints.html#RigidBodyDynamics.QuaternionSpherical",
    "page": "Joints",
    "title": "RigidBodyDynamics.QuaternionSpherical",
    "category": "Type",
    "text": "struct QuaternionSpherical{T} <: RigidBodyDynamics.JointType{T}\n\nThe QuaternionSpherical joint type allows rotation in any direction. It is an implementation of a ball-and-socket joint.\n\nThe 4-dimensional configuration vector q associated with a QuaternionSpherical joint is the unit quaternion that describes the orientation of the frame after the joint with respect to the frame before the joint. In other words, it is the quaternion that can be used to rotate vectors from the frame after the joint to the frame before the joint.\n\nThe 3-dimensional velocity vector v associated with a QuaternionSpherical joint is the angular velocity of the frame after the joint with respect to the frame before the joint, expressed in the frame after the joint (body frame).\n\n\n\n"
},

{
    "location": "joints.html#JointTypes-1",
    "page": "Joints",
    "title": "JointTypes",
    "category": "section",
    "text": "QuaternionFloating\nRevolute\nPrismatic\nFixed\nPlanar\nQuaternionSpherical"
},

{
    "location": "rigidbody.html#",
    "page": "Rigid bodies",
    "title": "Rigid bodies",
    "category": "page",
    "text": ""
},

{
    "location": "rigidbody.html#Rigid-bodies-1",
    "page": "Rigid bodies",
    "title": "Rigid bodies",
    "category": "section",
    "text": ""
},

{
    "location": "rigidbody.html#Index-1",
    "page": "Rigid bodies",
    "title": "Index",
    "category": "section",
    "text": "Pages   = [\"rigidbody.md\"]\nOrder   = [:type, :function]"
},

{
    "location": "rigidbody.html#RigidBodyDynamics.RigidBody",
    "page": "Rigid bodies",
    "title": "RigidBodyDynamics.RigidBody",
    "category": "Type",
    "text": "type RigidBody{T}\n\nA non-deformable body.\n\nA RigidBody has inertia (represented as a SpatialInertia), unless it represents a root (world) body. A RigidBody additionally stores a list of definitions of coordinate systems that are rigidly attached to it.\n\n\n\n"
},

{
    "location": "rigidbody.html#The-RigidBody-type-1",
    "page": "Rigid bodies",
    "title": "The RigidBody type",
    "category": "section",
    "text": "RigidBody"
},

{
    "location": "rigidbody.html#RigidBodyDynamics.add_contact_point!-Union{Tuple{RigidBodyDynamics.RigidBody{T},RigidBodyDynamics.Contact.ContactPoint{T,RigidBodyDynamics.Contact.SoftContactModel{RigidBodyDynamics.Contact.HuntCrossleyModel{T},RigidBodyDynamics.Contact.ViscoelasticCoulombModel{T}}}}, Tuple{T}} where T",
    "page": "Rigid bodies",
    "title": "RigidBodyDynamics.add_contact_point!",
    "category": "Method",
    "text": "add_contact_point!(body, point)\n\n\nAdd a new contact point to the rigid body\n\n\n\n"
},

{
    "location": "rigidbody.html#RigidBodyDynamics.add_frame!-Tuple{RigidBodyDynamics.RigidBody,RigidBodyDynamics.Spatial.Transform3D}",
    "page": "Rigid bodies",
    "title": "RigidBodyDynamics.add_frame!",
    "category": "Method",
    "text": "add_frame!(body, transform)\n\n\nAdd a new frame definition to body, represented by a homogeneous transform from the CartesianFrame3D to be added to any other frame that is already attached to body.\n\n\n\n"
},

{
    "location": "rigidbody.html#RigidBodyDynamics.contact_points-Tuple{RigidBodyDynamics.RigidBody}",
    "page": "Rigid bodies",
    "title": "RigidBodyDynamics.contact_points",
    "category": "Method",
    "text": "contact_points(body)\n\n\nReturn the contact points attached to the body as an ordered collection.\n\n\n\n"
},

{
    "location": "rigidbody.html#RigidBodyDynamics.default_frame-Tuple{RigidBodyDynamics.RigidBody}",
    "page": "Rigid bodies",
    "title": "RigidBodyDynamics.default_frame",
    "category": "Method",
    "text": "default_frame(body)\n\n\nThe CartesianFrame3D with respect to which all other frames attached to body are defined.\n\nSee frame_definitions(body), frame_definition(body, frame).\n\n\n\n"
},

{
    "location": "rigidbody.html#RigidBodyDynamics.fixed_transform-Tuple{RigidBodyDynamics.RigidBody,RigidBodyDynamics.Spatial.CartesianFrame3D,RigidBodyDynamics.Spatial.CartesianFrame3D}",
    "page": "Rigid bodies",
    "title": "RigidBodyDynamics.fixed_transform",
    "category": "Method",
    "text": "fixed_transform(body, from, to)\n\n\nReturn the transform from CartesianFrame3D from to to, both of which are rigidly attached to body.\n\n\n\n"
},

{
    "location": "rigidbody.html#RigidBodyDynamics.has_defined_inertia-Tuple{RigidBodyDynamics.RigidBody}",
    "page": "Rigid bodies",
    "title": "RigidBodyDynamics.has_defined_inertia",
    "category": "Method",
    "text": "has_defined_inertia(b)\n\n\nWhether the body has a defined inertia.\n\n\n\n"
},

{
    "location": "rigidbody.html#RigidBodyDynamics.spatial_inertia!-Tuple{RigidBodyDynamics.RigidBody,RigidBodyDynamics.Spatial.SpatialInertia}",
    "page": "Rigid bodies",
    "title": "RigidBodyDynamics.spatial_inertia!",
    "category": "Method",
    "text": "spatial_inertia!(body, inertia)\n\n\nSet the spatial inertia of the body.\n\n\n\n"
},

{
    "location": "rigidbody.html#RigidBodyDynamics.spatial_inertia-Tuple{RigidBodyDynamics.RigidBody}",
    "page": "Rigid bodies",
    "title": "RigidBodyDynamics.spatial_inertia",
    "category": "Method",
    "text": "spatial_inertia(b)\n\n\nReturn the spatial inertia of the body. If the inertia is undefined, calling this method will result in an error.\n\n\n\n"
},

{
    "location": "rigidbody.html#RigidBodyDynamics.change_default_frame!-Tuple{RigidBodyDynamics.RigidBody,RigidBodyDynamics.Spatial.CartesianFrame3D}",
    "page": "Rigid bodies",
    "title": "RigidBodyDynamics.change_default_frame!",
    "category": "Method",
    "text": "change_default_frame!(body, new_default_frame)\n\n\nChange the default frame of body to frame (which should already be among body\'s frame definitions).\n\n\n\n"
},

{
    "location": "rigidbody.html#RigidBodyDynamics.frame_definition-Tuple{RigidBodyDynamics.RigidBody,RigidBodyDynamics.Spatial.CartesianFrame3D}",
    "page": "Rigid bodies",
    "title": "RigidBodyDynamics.frame_definition",
    "category": "Method",
    "text": "frame_definition(body, frame)\n\n\nReturn the Transform3D defining frame (attached to body) with respect to default_frame(body).\n\nThrows an error if frame is not attached to body.\n\n\n\n"
},

{
    "location": "rigidbody.html#RigidBodyDynamics.frame_definitions-Tuple{RigidBodyDynamics.RigidBody}",
    "page": "Rigid bodies",
    "title": "RigidBodyDynamics.frame_definitions",
    "category": "Method",
    "text": "frame_definitions(body)\n\nReturn the list of homogeneous transforms (Transform3Ds) that define the coordinate systems attached to body with respect to a single common frame (default_frame(body)).\n\n\n\n"
},

{
    "location": "rigidbody.html#RigidBodyDynamics.is_fixed_to_body-Tuple{RigidBodyDynamics.RigidBody,RigidBodyDynamics.Spatial.CartesianFrame3D}",
    "page": "Rigid bodies",
    "title": "RigidBodyDynamics.is_fixed_to_body",
    "category": "Method",
    "text": "is_fixed_to_body(body, frame)\n\n\nWhether frame is attached to body (i.e. whether it is among frame_definitions(body)).\n\n\n\n"
},

{
    "location": "rigidbody.html#Functions-1",
    "page": "Rigid bodies",
    "title": "Functions",
    "category": "section",
    "text": "Modules = [RigidBodyDynamics]\nOrder   = [:function]\nPages   = [\"rigid_body.jl\"]"
},

{
    "location": "mechanism.html#",
    "page": "Mechanism",
    "title": "Mechanism",
    "category": "page",
    "text": ""
},

{
    "location": "mechanism.html#Mechanisms-1",
    "page": "Mechanism",
    "title": "Mechanisms",
    "category": "section",
    "text": ""
},

{
    "location": "mechanism.html#Index-1",
    "page": "Mechanism",
    "title": "Index",
    "category": "section",
    "text": "Pages   = [\"mechanism.md\"]\nOrder   = [:type, :function]"
},

{
    "location": "mechanism.html#RigidBodyDynamics.Mechanism",
    "page": "Mechanism",
    "title": "RigidBodyDynamics.Mechanism",
    "category": "Type",
    "text": "type Mechanism{T}\n\nA Mechanism represents an interconnection of rigid bodies and joints. Mechanisms store the joint layout and inertia parameters, but no state-dependent information.\n\n\n\n"
},

{
    "location": "mechanism.html#The-Mechanism-type-1",
    "page": "Mechanism",
    "title": "The Mechanism type",
    "category": "section",
    "text": "Mechanism"
},

{
    "location": "mechanism.html#RigidBodyDynamics.parse_urdf",
    "page": "Mechanism",
    "title": "RigidBodyDynamics.parse_urdf",
    "category": "Function",
    "text": "parse_urdf(scalartype, filename)\n\n\nCreate a Mechanism by parsing a URDF file.\n\n\n\n"
},

{
    "location": "mechanism.html#RigidBodyDynamics.attach!-Union{Tuple{RigidBodyDynamics.Mechanism{T},RigidBodyDynamics.RigidBody{T},RigidBodyDynamics.Mechanism{T}}, Tuple{T}} where T",
    "page": "Mechanism",
    "title": "RigidBodyDynamics.attach!",
    "category": "Method",
    "text": "attach!(mechanism, parentbody, childmechanism; child_root_pose)\n\n\nAttach a copy of childmechanism to mechanism. Return mappings from the bodies and joints of the childmechanism to the bodies and joints that were added to mechanism.\n\nEssentially replaces the root body of a copy of childmechanism with parentbody (which belongs to mechanism).\n\nNote: gravitational acceleration for childmechanism is ignored.\n\n\n\n"
},

{
    "location": "mechanism.html#RigidBodyDynamics.attach!-Union{Tuple{RigidBodyDynamics.Mechanism{T},RigidBodyDynamics.RigidBody{T},RigidBodyDynamics.RigidBody{T},RigidBodyDynamics.Joint{T,JT} where JT<:RigidBodyDynamics.JointType{T}}, Tuple{T}} where T",
    "page": "Mechanism",
    "title": "RigidBodyDynamics.attach!",
    "category": "Method",
    "text": "attach!(mechanism, predecessor, successor, joint; joint_pose, successor_pose)\n\n\nAttach successor to predecessor using joint.\n\nSee Joint for definitions of the terms successor and predecessor.\n\nThe Transform3Ds joint_pose and successor_pose define where joint is attached to each body. joint_pose should define frame_before(joint) with respect to any frame fixed to predecessor, and likewise successor_pose should define any frame fixed to successor with respect to frame_after(joint).\n\npredecessor is required to already be among the bodies of the Mechanism.\n\nIf successor is not yet a part of the Mechanism, it will be added to the Mechanism. Otherwise, the joint will be treated as a non-tree edge in the Mechanism, effectively creating a loop constraint that will be enforced using Lagrange multipliers (as opposed to using recursive algorithms).\n\n\n\n"
},

{
    "location": "mechanism.html#RigidBodyDynamics.maximal_coordinates-Tuple{RigidBodyDynamics.Mechanism}",
    "page": "Mechanism",
    "title": "RigidBodyDynamics.maximal_coordinates",
    "category": "Method",
    "text": "maximal_coordinates(mechanism)\n\n\nReturn a dynamically equivalent Mechanism, but with a flat tree structure with all bodies attached to the root body with a quaternion floating joint, and with the \'tree edge\' joints of the input Mechanism transformed into non-tree edge joints (a constraint enforced using Lagrange multipliers in dynamics!). In addition, return:\n\na mapping from bodies in the maximal-coordinate Mechanism to their floating joints.\na mapping from bodies in the input Mechanism to bodies in the returned Mechanism\na mapping from joints in the input Mechanism to joints in the returned Mechanism\n\n\n\n"
},

{
    "location": "mechanism.html#RigidBodyDynamics.rand_chain_mechanism-Union{Tuple{Type{T},Vararg{Type{#s20} where #s20<:RigidBodyDynamics.JointType{T},N} where N}, Tuple{T}} where T",
    "page": "Mechanism",
    "title": "RigidBodyDynamics.rand_chain_mechanism",
    "category": "Method",
    "text": "rand_chain_mechanism(?, jointtypes)\n\n\nCreate a random chain Mechanism with the given joint types.\n\n\n\n"
},

{
    "location": "mechanism.html#RigidBodyDynamics.rand_floating_tree_mechanism-Union{Tuple{Type{T},Vararg{Type{#s20} where #s20<:RigidBodyDynamics.JointType{T},N} where N}, Tuple{T}} where T",
    "page": "Mechanism",
    "title": "RigidBodyDynamics.rand_floating_tree_mechanism",
    "category": "Method",
    "text": "rand_floating_tree_mechanism(?, nonfloatingjointtypes)\n\n\nCreate a random tree Mechanism, with a quaternion floating joint as the first joint (between the root body and the first non-root body).\n\n\n\n"
},

{
    "location": "mechanism.html#RigidBodyDynamics.rand_tree_mechanism-Union{Tuple{Type{T},Function,Vararg{Type{#s8} where #s8<:RigidBodyDynamics.JointType{T},N} where N}, Tuple{T}} where T",
    "page": "Mechanism",
    "title": "RigidBodyDynamics.rand_tree_mechanism",
    "category": "Method",
    "text": "rand_tree_mechanism(?, parentselector, jointtypes)\n\n\nCreate a random tree Mechanism with the given joint types. Each new body is attached to a parent selected using the parentselector function.\n\n\n\n"
},

{
    "location": "mechanism.html#RigidBodyDynamics.rand_tree_mechanism-Union{Tuple{Type{T},Vararg{Type{#s20} where #s20<:RigidBodyDynamics.JointType{T},N} where N}, Tuple{T}} where T",
    "page": "Mechanism",
    "title": "RigidBodyDynamics.rand_tree_mechanism",
    "category": "Method",
    "text": "rand_tree_mechanism(?, jointtypes)\n\n\nCreate a random tree Mechanism.\n\n\n\n"
},

{
    "location": "mechanism.html#RigidBodyDynamics.remove_fixed_tree_joints!-Tuple{RigidBodyDynamics.Mechanism}",
    "page": "Mechanism",
    "title": "RigidBodyDynamics.remove_fixed_tree_joints!",
    "category": "Method",
    "text": "remove_fixed_tree_joints!(mechanism)\n\n\nRemove any fixed joints present as tree edges in mechanism by merging the rigid bodies that these fixed joints join together into bodies with equivalent inertial properties. Return the fixed joints that were removed.\n\n\n\n"
},

{
    "location": "mechanism.html#RigidBodyDynamics.remove_joint!-Union{Tuple{M}, Tuple{RigidBodyDynamics.Mechanism{M},RigidBodyDynamics.Joint{M,JT} where JT<:RigidBodyDynamics.JointType{M}}} where M",
    "page": "Mechanism",
    "title": "RigidBodyDynamics.remove_joint!",
    "category": "Method",
    "text": "remove_joint!(mechanism, joint; flipped_joint_map, spanning_tree_next_edge)\n\n\nRemove a joint from the mechanism. Rebuilds the spanning tree if the joint is part of the current spanning tree.\n\nOptionally, the flipped_joint_map keyword argument can be used to pass in an associative container that will be populated with a mapping from original joints to flipped joints, if removing joint requires rebuilding the spanning tree of mechanism and the polarity of some joints needed to be changed in the process.\n\nAlso optionally, spanning_tree_next_edge can be used to select which joints should become part of the new spanning tree, if rebuilding the spanning tree is required.\n\n\n\n"
},

{
    "location": "mechanism.html#RigidBodyDynamics.submechanism-Union{Tuple{RigidBodyDynamics.Mechanism{T},RigidBodyDynamics.RigidBody{T}}, Tuple{T}} where T",
    "page": "Mechanism",
    "title": "RigidBodyDynamics.submechanism",
    "category": "Method",
    "text": "submechanism(mechanism, submechanismroot)\n\n\nCreate a new Mechanism from the subtree of mechanism rooted at submechanismroot.\n\nAlso return mappings from the bodies and joints of the input mechanism to the bodies and joints of the submechanism.\n\nAny non-tree joint in mechanism will appear in the returned Mechanism if and only if both its successor and its predecessor are part of the subtree.\n\n\n\n"
},

{
    "location": "mechanism.html#RigidBodyDynamics.rebuild_spanning_tree!-Union{Tuple{M}, Tuple{RigidBodyDynamics.Mechanism{M},Associative}, Tuple{RigidBodyDynamics.Mechanism{M}}} where M",
    "page": "Mechanism",
    "title": "RigidBodyDynamics.rebuild_spanning_tree!",
    "category": "Method",
    "text": "rebuild_spanning_tree!(mechanism)\nrebuild_spanning_tree!(mechanism, flipped_joint_map; next_edge)\n\n\nReconstruct the mechanism\'s spanning tree.\n\nOptionally, the flipped_joint_map keyword argument can be used to pass in an associative container that will be populated with a mapping from original joints to flipped joints, if the rebuilding process required the polarity of some joints to be flipped.\n\nAlso optionally, next_edge can be used to select which joints should become part of the new spanning tree.\n\n\n\n"
},

{
    "location": "mechanism.html#mechanism_create-1",
    "page": "Mechanism",
    "title": "Creating and modifying Mechanisms",
    "category": "section",
    "text": "parse_urdfModules = [RigidBodyDynamics]\nOrder   = [:function]\nPages   = [\"mechanism_modification.jl\"]"
},

{
    "location": "mechanism.html#RigidBodyDynamics.bodies-Tuple{RigidBodyDynamics.Mechanism}",
    "page": "Mechanism",
    "title": "RigidBodyDynamics.bodies",
    "category": "Method",
    "text": "bodies(mechanism)\n\n\nReturn the RigidBodys that are part of the Mechanism as an iterable collection.\n\n\n\n"
},

{
    "location": "mechanism.html#RigidBodyDynamics.body_fixed_frame_to_body-Tuple{RigidBodyDynamics.Mechanism,RigidBodyDynamics.Spatial.CartesianFrame3D}",
    "page": "Mechanism",
    "title": "RigidBodyDynamics.body_fixed_frame_to_body",
    "category": "Method",
    "text": "body_fixed_frame_to_body(mechanism, frame)\n\n\nReturn the RigidBody to which frame is attached.\n\nNote: this function is linear in the number of bodies and is not meant to be called in tight loops.\n\n\n\n"
},

{
    "location": "mechanism.html#RigidBodyDynamics.fixed_transform-Tuple{RigidBodyDynamics.Mechanism,RigidBodyDynamics.Spatial.CartesianFrame3D,RigidBodyDynamics.Spatial.CartesianFrame3D}",
    "page": "Mechanism",
    "title": "RigidBodyDynamics.fixed_transform",
    "category": "Method",
    "text": "fixed_transform(mechanism, from, to)\n\n\nReturn the transform from CartesianFrame3D from to to, both of which are rigidly attached to the same RigidBody.\n\nNote: this function is linear in the number of bodies and is not meant to be called in tight loops.\n\n\n\n"
},

{
    "location": "mechanism.html#RigidBodyDynamics.in_joints-Tuple{RigidBodyDynamics.RigidBody,RigidBodyDynamics.Mechanism}",
    "page": "Mechanism",
    "title": "RigidBodyDynamics.in_joints",
    "category": "Method",
    "text": "in_joints(body, mechanism)\n\n\nReturn the joints that have body as their successor.\n\n\n\n"
},

{
    "location": "mechanism.html#RigidBodyDynamics.joint_to_parent-Tuple{RigidBodyDynamics.RigidBody,RigidBodyDynamics.Mechanism}",
    "page": "Mechanism",
    "title": "RigidBodyDynamics.joint_to_parent",
    "category": "Method",
    "text": "joint_to_parent(body, mechanism)\n\n\nReturn the joint that is part of the mechanism\'s kinematic tree and has body as its successor.\n\n\n\n"
},

{
    "location": "mechanism.html#RigidBodyDynamics.joints-Tuple{RigidBodyDynamics.Mechanism}",
    "page": "Mechanism",
    "title": "RigidBodyDynamics.joints",
    "category": "Method",
    "text": "joints(mechanism)\n\n\nReturn the Joints that are part of the Mechanism as an iterable collection.\n\n\n\n"
},

{
    "location": "mechanism.html#RigidBodyDynamics.joints_to_children-Tuple{RigidBodyDynamics.RigidBody,RigidBodyDynamics.Mechanism}",
    "page": "Mechanism",
    "title": "RigidBodyDynamics.joints_to_children",
    "category": "Method",
    "text": "joints_to_children(body, mechanism)\n\n\nReturn the joints that are part of the mechanism\'s kinematic tree and have body as their predecessor.\n\n\n\n"
},

{
    "location": "mechanism.html#RigidBodyDynamics.num_additional_states-Tuple{RigidBodyDynamics.Mechanism}",
    "page": "Mechanism",
    "title": "RigidBodyDynamics.num_additional_states",
    "category": "Method",
    "text": "num_additional_states(mechanism)\n\n\nReturn the dimension of the vector of additional states s (used for stateful contact models).\n\n\n\n"
},

{
    "location": "mechanism.html#RigidBodyDynamics.num_positions-Tuple{RigidBodyDynamics.Mechanism}",
    "page": "Mechanism",
    "title": "RigidBodyDynamics.num_positions",
    "category": "Method",
    "text": "num_positions(mechanism)\n\n\nReturn the dimension of the joint configuration vector q.\n\n\n\n"
},

{
    "location": "mechanism.html#RigidBodyDynamics.num_velocities-Tuple{RigidBodyDynamics.Mechanism}",
    "page": "Mechanism",
    "title": "RigidBodyDynamics.num_velocities",
    "category": "Method",
    "text": "num_velocities(mechanism)\n\n\nReturn the dimension of the joint velocity vector v.\n\n\n\n"
},

{
    "location": "mechanism.html#RigidBodyDynamics.out_joints-Tuple{RigidBodyDynamics.RigidBody,RigidBodyDynamics.Mechanism}",
    "page": "Mechanism",
    "title": "RigidBodyDynamics.out_joints",
    "category": "Method",
    "text": "out_joints(body, mechanism)\n\n\nReturn the joints that have body as their predecessor.\n\n\n\n"
},

{
    "location": "mechanism.html#RigidBodyDynamics.path-Tuple{RigidBodyDynamics.Mechanism,RigidBodyDynamics.RigidBody,RigidBodyDynamics.RigidBody}",
    "page": "Mechanism",
    "title": "RigidBodyDynamics.path",
    "category": "Method",
    "text": "path(mechanism, from, to)\n\n\nReturn the path from rigid body from to to along edges of the Mechanism\'s kinematic tree.\n\n\n\n"
},

{
    "location": "mechanism.html#RigidBodyDynamics.predecessor-Tuple{RigidBodyDynamics.Joint,RigidBodyDynamics.Mechanism}",
    "page": "Mechanism",
    "title": "RigidBodyDynamics.predecessor",
    "category": "Method",
    "text": "predecessor(joint, mechanism)\n\n\nReturn the body \'before\' the joint, i.e. the \'tail\' of the joint interpreted as an arrow in the Mechanism\'s kinematic graph.\n\nSee Joint.\n\n\n\n"
},

{
    "location": "mechanism.html#RigidBodyDynamics.root_body-Tuple{RigidBodyDynamics.Mechanism}",
    "page": "Mechanism",
    "title": "RigidBodyDynamics.root_body",
    "category": "Method",
    "text": "root_body(mechanism)\n\n\nReturn the root (stationary \'world\') body of the Mechanism.\n\n\n\n"
},

{
    "location": "mechanism.html#RigidBodyDynamics.root_frame-Tuple{RigidBodyDynamics.Mechanism}",
    "page": "Mechanism",
    "title": "RigidBodyDynamics.root_frame",
    "category": "Method",
    "text": "root_frame(mechanism)\n\n\nReturn the default frame of the root body.\n\n\n\n"
},

{
    "location": "mechanism.html#RigidBodyDynamics.successor-Tuple{RigidBodyDynamics.Joint,RigidBodyDynamics.Mechanism}",
    "page": "Mechanism",
    "title": "RigidBodyDynamics.successor",
    "category": "Method",
    "text": "successor(joint, mechanism)\n\n\nReturn the body \'after\' the joint, i.e. the \'head\' of the joint interpreted as an arrow in the Mechanism\'s kinematic graph.\n\nSee Joint.\n\n\n\n"
},

{
    "location": "mechanism.html#RigidBodyDynamics.tree_joints-Tuple{RigidBodyDynamics.Mechanism}",
    "page": "Mechanism",
    "title": "RigidBodyDynamics.tree_joints",
    "category": "Method",
    "text": "tree_joints(mechanism)\n\n\nReturn the Joints that are part of the Mechanism\'s spanning tree as an iterable collection.\n\n\n\n"
},

{
    "location": "mechanism.html#RigidBodyDynamics.body_fixed_frame_definition-Tuple{RigidBodyDynamics.Mechanism,RigidBodyDynamics.Spatial.CartesianFrame3D}",
    "page": "Mechanism",
    "title": "RigidBodyDynamics.body_fixed_frame_definition",
    "category": "Method",
    "text": "body_fixed_frame_definition(mechanism, frame)\n\n\nReturn the definition of body-fixed frame frame, i.e., the Transform3D from frame to the default frame of the body to which it is attached.\n\nNote: this function is linear in the number of bodies and is not meant to be called in tight loops.\n\nSee also default_frame, frame_definition.\n\n\n\n"
},

{
    "location": "mechanism.html#RigidBodyDynamics.non_tree_joints-Tuple{RigidBodyDynamics.Mechanism}",
    "page": "Mechanism",
    "title": "RigidBodyDynamics.non_tree_joints",
    "category": "Method",
    "text": "non_tree_joints(mechanism)\n\n\nReturn the Joints that are not part of the Mechanism\'s spanning tree as an iterable collection.\n\n\n\n"
},

{
    "location": "mechanism.html#Basic-functionality-1",
    "page": "Mechanism",
    "title": "Basic functionality",
    "category": "section",
    "text": "Modules = [RigidBodyDynamics]\nOrder   = [:function]\nPages   = [\"mechanism.jl\"]"
},

{
    "location": "mechanismstate.html#",
    "page": "MechanismState",
    "title": "MechanismState",
    "category": "page",
    "text": ""
},

{
    "location": "mechanismstate.html#MechanismState-1",
    "page": "MechanismState",
    "title": "MechanismState",
    "category": "section",
    "text": ""
},

{
    "location": "mechanismstate.html#Index-1",
    "page": "MechanismState",
    "title": "Index",
    "category": "section",
    "text": "Pages   = [\"mechanismstate.md\"]\nOrder   = [:type, :function]"
},

{
    "location": "mechanismstate.html#RigidBodyDynamics.MechanismState",
    "page": "MechanismState",
    "title": "RigidBodyDynamics.MechanismState",
    "category": "Type",
    "text": "struct MechanismState{X, M, C, JointCollection, MotionSubspaceCollection, WrenchSubspaceCollection}\n\nA MechanismState stores state information for an entire Mechanism. It contains the joint configuration and velocity vectors q and v, and a vector of additional states s. In addition, it stores cache variables that depend on q and v and are aimed at preventing double work.\n\nType parameters:\n\nX: the scalar type of the q, v, and s vectors.\nM: the scalar type of the Mechanism\nC: the scalar type of the cache variables (== promote_type(X, M))\n\n\n\n"
},

{
    "location": "mechanismstate.html#The-MechanismState-type-1",
    "page": "MechanismState",
    "title": "The MechanismState type",
    "category": "section",
    "text": "MechanismState"
},

{
    "location": "mechanismstate.html#RigidBodyDynamics.additional_state-Tuple{RigidBodyDynamics.MechanismState}",
    "page": "MechanismState",
    "title": "RigidBodyDynamics.additional_state",
    "category": "Method",
    "text": "additional_state(state)\n\n\nReturn the vector of additional states s.\n\n\n\n"
},

{
    "location": "mechanismstate.html#RigidBodyDynamics.bias_acceleration-Tuple{RigidBodyDynamics.MechanismState,Union{#s20, RigidBodyDynamics.BodyID} where #s20<:RigidBodyDynamics.RigidBody}",
    "page": "MechanismState",
    "title": "RigidBodyDynamics.bias_acceleration",
    "category": "Method",
    "text": "bias_acceleration(state, body)\n\n\nReturn the bias acceleration of the given body with respect to the world, i.e. the spatial acceleration of default_frame(body) with respect to the root frame of the mechanism, expressed in the root frame, when all joint accelerations are zero.\n\n\n\n"
},

{
    "location": "mechanismstate.html#RigidBodyDynamics.bias_acceleration-Tuple{RigidBodyDynamics.MechanismState,Union{#s20, RigidBodyDynamics.JointID} where #s20<:RigidBodyDynamics.Joint}",
    "page": "MechanismState",
    "title": "RigidBodyDynamics.bias_acceleration",
    "category": "Method",
    "text": "bias_acceleration(state, joint)\n\n\nReturn the bias acceleration across the given joint, i.e. the spatial acceleration of frame_after(joint) with respect to frame_before(joint), expressed in the root frame of the mechanism when all joint accelerations are zero.\n\n\n\n"
},

{
    "location": "mechanismstate.html#RigidBodyDynamics.configuration-Tuple{RigidBodyDynamics.MechanismState,Union{#s20, RigidBodyDynamics.JointID} where #s20<:RigidBodyDynamics.Joint}",
    "page": "MechanismState",
    "title": "RigidBodyDynamics.configuration",
    "category": "Method",
    "text": "configuration(state, joint)\n\n\nReturn the part of the configuration vector q associated with joint.\n\n\n\n"
},

{
    "location": "mechanismstate.html#RigidBodyDynamics.configuration-Tuple{RigidBodyDynamics.MechanismState}",
    "page": "MechanismState",
    "title": "RigidBodyDynamics.configuration",
    "category": "Method",
    "text": "configuration(state)\n\n\nReturn the configuration vector q.\n\nNote that this returns a reference to the underlying data in state. The user is responsible for calling setdirty! after modifying this vector to ensure that dependent cache variables are invalidated.\n\n\n\n"
},

{
    "location": "mechanismstate.html#RigidBodyDynamics.configuration_range-Tuple{RigidBodyDynamics.MechanismState,Union{#s20, RigidBodyDynamics.JointID} where #s20<:RigidBodyDynamics.Joint}",
    "page": "MechanismState",
    "title": "RigidBodyDynamics.configuration_range",
    "category": "Method",
    "text": "configuration_range(state, joint)\n\n\nReturn the range of indices into the joint configuration vector q corresponding to joint joint.\n\n\n\n"
},

{
    "location": "mechanismstate.html#RigidBodyDynamics.crb_inertia-Tuple{RigidBodyDynamics.MechanismState,Union{#s20, RigidBodyDynamics.BodyID} where #s20<:RigidBodyDynamics.RigidBody}",
    "page": "MechanismState",
    "title": "RigidBodyDynamics.crb_inertia",
    "category": "Method",
    "text": "crb_inertia(state, body)\n\n\nReturn the composite rigid body inertia body expressed in the root frame of the mechanism.\n\n\n\n"
},

{
    "location": "mechanismstate.html#RigidBodyDynamics.global_coordinates!-Tuple{RigidBodyDynamics.MechanismState,RigidBodyDynamics.CustomCollections.SegmentedVector{RigidBodyDynamics.JointID,T,KeyRange,P} where P<:AbstractArray{T,1} where KeyRange<:Range{RigidBodyDynamics.JointID} where T,RigidBodyDynamics.CustomCollections.SegmentedVector{RigidBodyDynamics.JointID,T,KeyRange,P} where P<:AbstractArray{T,1} where KeyRange<:Range{RigidBodyDynamics.JointID} where T}",
    "page": "MechanismState",
    "title": "RigidBodyDynamics.global_coordinates!",
    "category": "Method",
    "text": "global_coordinates!(state, q0, ϕ)\n\n\nConvert local coordinates phi centered around q_0 to (global) configuration vector q.\n\n\n\n"
},

{
    "location": "mechanismstate.html#RigidBodyDynamics.gravitational_potential_energy-Tuple{RigidBodyDynamics.MechanismState,Union{#s20, RigidBodyDynamics.BodyID} where #s20<:RigidBodyDynamics.RigidBody}",
    "page": "MechanismState",
    "title": "RigidBodyDynamics.gravitational_potential_energy",
    "category": "Method",
    "text": "gravitational_potential_energy(state, body)\n\n\nReturn the gravitational potential energy in the given state, computed as the negation of the dot product of the gravitational force and the center of mass expressed in the Mechanism\'s root frame.\n\n\n\n"
},

{
    "location": "mechanismstate.html#RigidBodyDynamics.joint_transform-Tuple{RigidBodyDynamics.MechanismState,Union{#s20, RigidBodyDynamics.JointID} where #s20<:RigidBodyDynamics.Joint}",
    "page": "MechanismState",
    "title": "RigidBodyDynamics.joint_transform",
    "category": "Method",
    "text": "joint_transform(state, joint)\n\n\nReturn the joint transform for the given joint, i.e. the transform from frame_after(joint) to frame_before(joint).\n\n\n\n"
},

{
    "location": "mechanismstate.html#RigidBodyDynamics.local_coordinates!-Tuple{RigidBodyDynamics.CustomCollections.SegmentedVector{RigidBodyDynamics.JointID,T,KeyRange,P} where P<:AbstractArray{T,1} where KeyRange<:Range{RigidBodyDynamics.JointID} where T,RigidBodyDynamics.CustomCollections.SegmentedVector{RigidBodyDynamics.JointID,T,KeyRange,P} where P<:AbstractArray{T,1} where KeyRange<:Range{RigidBodyDynamics.JointID} where T,RigidBodyDynamics.MechanismState,RigidBodyDynamics.CustomCollections.SegmentedVector{RigidBodyDynamics.JointID,T,KeyRange,P} where P<:AbstractArray{T,1} where KeyRange<:Range{RigidBodyDynamics.JointID} where T}",
    "page": "MechanismState",
    "title": "RigidBodyDynamics.local_coordinates!",
    "category": "Method",
    "text": "local_coordinates!(ϕ, ϕd, state, q0)\n\n\nCompute local coordinates phi centered around (global) configuration vector q_0, as well as their time derivatives dotphi.\n\n\n\n"
},

{
    "location": "mechanismstate.html#RigidBodyDynamics.normalize_configuration!-Tuple{RigidBodyDynamics.MechanismState}",
    "page": "MechanismState",
    "title": "RigidBodyDynamics.normalize_configuration!",
    "category": "Method",
    "text": "normalize_configuration!(state)\n\n\nProject the configuration vector q onto the configuration manifold.\n\nFor example:\n\nfor a part of q corresponding to a revolute joint, this method is a no-op;\nfor a part of q corresponding to a spherical joint that uses a unit quaternion\n\nto parameterize the orientation of its successor with respect to its predecessor, normalize_configuration! will renormalize the quaternion so that it is indeed of unit length.\n\nwarning: Warning\n\n\nThis method does not ensure that the configuration or velocity satisfy joint configuration or velocity limits/bounds.\n\n\n\n"
},

{
    "location": "mechanismstate.html#RigidBodyDynamics.num_additional_states-Tuple{RigidBodyDynamics.MechanismState}",
    "page": "MechanismState",
    "title": "RigidBodyDynamics.num_additional_states",
    "category": "Method",
    "text": "num_additional_states(state)\n\n\nReturn the length of the vector of additional states s (currently used for stateful contact models).\n\n\n\n"
},

{
    "location": "mechanismstate.html#RigidBodyDynamics.num_positions-Tuple{RigidBodyDynamics.MechanismState}",
    "page": "MechanismState",
    "title": "RigidBodyDynamics.num_positions",
    "category": "Method",
    "text": "num_positions(state)\n\n\nReturn the length of the joint configuration vector q.\n\n\n\n"
},

{
    "location": "mechanismstate.html#RigidBodyDynamics.num_velocities-Tuple{RigidBodyDynamics.MechanismState}",
    "page": "MechanismState",
    "title": "RigidBodyDynamics.num_velocities",
    "category": "Method",
    "text": "num_velocities(state)\n\n\nReturn the length of the joint velocity vector v.\n\n\n\n"
},

{
    "location": "mechanismstate.html#RigidBodyDynamics.rand_configuration!-Tuple{RigidBodyDynamics.MechanismState}",
    "page": "MechanismState",
    "title": "RigidBodyDynamics.rand_configuration!",
    "category": "Method",
    "text": "rand_configuration!(state)\n\n\nRandomize the configuration vector q. The distribution depends on the particular joint types present in the associated Mechanism. The resulting q is guaranteed to be on the Mechanism\'s configuration manifold. Invalidates cache variables.\n\n\n\n"
},

{
    "location": "mechanismstate.html#RigidBodyDynamics.rand_velocity!-Tuple{RigidBodyDynamics.MechanismState}",
    "page": "MechanismState",
    "title": "RigidBodyDynamics.rand_velocity!",
    "category": "Method",
    "text": "rand_velocity!(state)\n\n\nRandomize the velocity vector v. Invalidates cache variables.\n\n\n\n"
},

{
    "location": "mechanismstate.html#RigidBodyDynamics.relative_transform-Tuple{RigidBodyDynamics.MechanismState,RigidBodyDynamics.Spatial.CartesianFrame3D,RigidBodyDynamics.Spatial.CartesianFrame3D}",
    "page": "MechanismState",
    "title": "RigidBodyDynamics.relative_transform",
    "category": "Method",
    "text": "relative_transform(state, from, to)\n\n\nReturn the homogeneous transform from from to to.\n\n\n\n"
},

{
    "location": "mechanismstate.html#RigidBodyDynamics.relative_twist-Tuple{RigidBodyDynamics.MechanismState,RigidBodyDynamics.Spatial.CartesianFrame3D,RigidBodyDynamics.Spatial.CartesianFrame3D}",
    "page": "MechanismState",
    "title": "RigidBodyDynamics.relative_twist",
    "category": "Method",
    "text": "relative_twist(state, body_frame, base_frame)\n\n\nReturn the twist of body_frame with respect to base_frame, expressed in the Mechanism\'s root frame.\n\n\n\n"
},

{
    "location": "mechanismstate.html#RigidBodyDynamics.relative_twist-Tuple{RigidBodyDynamics.MechanismState,Union{#s19, RigidBodyDynamics.BodyID} where #s19<:RigidBodyDynamics.RigidBody,Union{#s8, RigidBodyDynamics.BodyID} where #s8<:RigidBodyDynamics.RigidBody}",
    "page": "MechanismState",
    "title": "RigidBodyDynamics.relative_twist",
    "category": "Method",
    "text": "relative_twist(state, body, base)\n\n\nReturn the twist of body with respect to base, expressed in the Mechanism\'s root frame.\n\n\n\n"
},

{
    "location": "mechanismstate.html#RigidBodyDynamics.set_additional_state!-Tuple{RigidBodyDynamics.MechanismState,AbstractArray{T,1} where T}",
    "page": "MechanismState",
    "title": "RigidBodyDynamics.set_additional_state!",
    "category": "Method",
    "text": "set_additional_state!(state, s)\n\n\nSet the vector of additional states s.\n\n\n\n"
},

{
    "location": "mechanismstate.html#RigidBodyDynamics.set_configuration!-Tuple{RigidBodyDynamics.MechanismState,AbstractArray{T,1} where T}",
    "page": "MechanismState",
    "title": "RigidBodyDynamics.set_configuration!",
    "category": "Method",
    "text": "set_configuration!(state, q)\n\n\nSet the configuration vector q. Invalidates cache variables.\n\n\n\n"
},

{
    "location": "mechanismstate.html#RigidBodyDynamics.set_configuration!-Tuple{RigidBodyDynamics.MechanismState,RigidBodyDynamics.Joint,AbstractArray{T,1} where T}",
    "page": "MechanismState",
    "title": "RigidBodyDynamics.set_configuration!",
    "category": "Method",
    "text": "set_configuration!(state, joint, q)\n\n\nSet the part of the configuration vector associated with joint. Invalidates cache variables.\n\n\n\n"
},

{
    "location": "mechanismstate.html#RigidBodyDynamics.set_velocity!-Tuple{RigidBodyDynamics.MechanismState,AbstractArray{T,1} where T}",
    "page": "MechanismState",
    "title": "RigidBodyDynamics.set_velocity!",
    "category": "Method",
    "text": "set_velocity!(state, v)\n\n\nSet the velocity vector v. Invalidates cache variables.\n\n\n\n"
},

{
    "location": "mechanismstate.html#RigidBodyDynamics.set_velocity!-Tuple{RigidBodyDynamics.MechanismState,RigidBodyDynamics.Joint,AbstractArray{T,1} where T}",
    "page": "MechanismState",
    "title": "RigidBodyDynamics.set_velocity!",
    "category": "Method",
    "text": "set_velocity!(state, joint, v)\n\n\nSet the part of the velocity vector associated with joint. Invalidates cache variables.\n\n\n\n"
},

{
    "location": "mechanismstate.html#RigidBodyDynamics.setdirty!-Tuple{RigidBodyDynamics.MechanismState}",
    "page": "MechanismState",
    "title": "RigidBodyDynamics.setdirty!",
    "category": "Method",
    "text": "setdirty!(state)\n\n\nInvalidate all cache variables.\n\n\n\n"
},

{
    "location": "mechanismstate.html#RigidBodyDynamics.spatial_inertia-Tuple{RigidBodyDynamics.MechanismState,Union{#s20, RigidBodyDynamics.BodyID} where #s20<:RigidBodyDynamics.RigidBody}",
    "page": "MechanismState",
    "title": "RigidBodyDynamics.spatial_inertia",
    "category": "Method",
    "text": "spatial_inertia(state, body)\n\n\nReturn the spatial inertia of body expressed in the root frame of the mechanism.\n\n\n\n"
},

{
    "location": "mechanismstate.html#RigidBodyDynamics.transform_to_root-Tuple{RigidBodyDynamics.MechanismState,Union{#s20, RigidBodyDynamics.BodyID} where #s20<:RigidBodyDynamics.RigidBody}",
    "page": "MechanismState",
    "title": "RigidBodyDynamics.transform_to_root",
    "category": "Method",
    "text": "transform_to_root(state, body)\n\n\nReturn the transform from default_frame(body) to the root frame of the mechanism.\n\n\n\n"
},

{
    "location": "mechanismstate.html#RigidBodyDynamics.twist_wrt_world-Tuple{RigidBodyDynamics.MechanismState,Union{#s20, RigidBodyDynamics.BodyID} where #s20<:RigidBodyDynamics.RigidBody}",
    "page": "MechanismState",
    "title": "RigidBodyDynamics.twist_wrt_world",
    "category": "Method",
    "text": "twist_wrt_world(state, body)\n\n\nReturn the twist of default_frame(body) with respect to the root frame of the mechanism, expressed in the root frame.\n\n\n\n"
},

{
    "location": "mechanismstate.html#RigidBodyDynamics.velocity-Tuple{RigidBodyDynamics.MechanismState,Union{#s20, RigidBodyDynamics.JointID} where #s20<:RigidBodyDynamics.Joint}",
    "page": "MechanismState",
    "title": "RigidBodyDynamics.velocity",
    "category": "Method",
    "text": "velocity(state, joint)\n\n\nReturn the part of the velocity vector v associated with joint.\n\n\n\n"
},

{
    "location": "mechanismstate.html#RigidBodyDynamics.velocity-Tuple{RigidBodyDynamics.MechanismState}",
    "page": "MechanismState",
    "title": "RigidBodyDynamics.velocity",
    "category": "Method",
    "text": "velocity(state)\n\n\nReturn the velocity vector v.\n\nNote that this function returns a read-write reference to a field in state. The user is responsible for calling setdirty! after modifying this vector to ensure that dependent cache variables are invalidated.\n\n\n\n"
},

{
    "location": "mechanismstate.html#RigidBodyDynamics.velocity_range-Tuple{RigidBodyDynamics.MechanismState,Union{#s20, RigidBodyDynamics.JointID} where #s20<:RigidBodyDynamics.Joint}",
    "page": "MechanismState",
    "title": "RigidBodyDynamics.velocity_range",
    "category": "Method",
    "text": "velocity_range(state, joint)\n\n\nReturn the range of indices into the joint velocity vector v corresponding to joint joint.\n\n\n\n"
},

{
    "location": "mechanismstate.html#RigidBodyDynamics.zero!-Tuple{RigidBodyDynamics.MechanismState}",
    "page": "MechanismState",
    "title": "RigidBodyDynamics.zero!",
    "category": "Method",
    "text": "zero!(state)\n\n\nZero both the configuration and velocity. Invalidates cache variables.\n\nSee zero_configuration!, zero_velocity!.\n\n\n\n"
},

{
    "location": "mechanismstate.html#RigidBodyDynamics.zero_configuration!-Tuple{RigidBodyDynamics.MechanismState}",
    "page": "MechanismState",
    "title": "RigidBodyDynamics.zero_configuration!",
    "category": "Method",
    "text": "zero_configuration!(state)\n\n\n\'Zero\' the configuration vector q. Invalidates cache variables.\n\nNote that when the Mechanism contains e.g. quaternion-parameterized joints, q may not actually be set to all zeros; the quaternion part of the configuration vector would be set to identity. The contract is that each of the joint transforms should be an identity transform.\n\n\n\n"
},

{
    "location": "mechanismstate.html#RigidBodyDynamics.zero_velocity!-Tuple{RigidBodyDynamics.MechanismState}",
    "page": "MechanismState",
    "title": "RigidBodyDynamics.zero_velocity!",
    "category": "Method",
    "text": "zero_velocity!(state)\n\n\nZero the velocity vector v. Invalidates cache variables.\n\n\n\n"
},

{
    "location": "mechanismstate.html#Base.Random.rand!-Tuple{RigidBodyDynamics.MechanismState}",
    "page": "MechanismState",
    "title": "Base.Random.rand!",
    "category": "Method",
    "text": "rand!(state)\n\n\nRandomize both the configuration and velocity. Invalidates cache variables.\n\n\n\n"
},

{
    "location": "mechanismstate.html#RigidBodyDynamics.reset_contact_state!-Tuple{RigidBodyDynamics.MechanismState}",
    "page": "MechanismState",
    "title": "RigidBodyDynamics.reset_contact_state!",
    "category": "Method",
    "text": "reset_contact_state!(state)\n\n\nReset all contact state variables.\n\n\n\n"
},

{
    "location": "mechanismstate.html#RigidBodyDynamics.twist-Tuple{RigidBodyDynamics.MechanismState,Union{#s20, RigidBodyDynamics.JointID} where #s20<:RigidBodyDynamics.Joint}",
    "page": "MechanismState",
    "title": "RigidBodyDynamics.twist",
    "category": "Method",
    "text": "twist(state, joint)\n\n\nReturn the joint twist for the given joint, i.e. the twist of frame_after(joint) with respect to frame_before(joint), expressed in the root frame of the mechanism.\n\n\n\n"
},

{
    "location": "mechanismstate.html#Functions-1",
    "page": "MechanismState",
    "title": "Functions",
    "category": "section",
    "text": "Modules = [RigidBodyDynamics]\nOrder   = [:function]\nPages   = [\"mechanism_state.jl\"]"
},

{
    "location": "algorithms.html#",
    "page": "Kinematics/dynamics algorithms",
    "title": "Kinematics/dynamics algorithms",
    "category": "page",
    "text": ""
},

{
    "location": "algorithms.html#Algorithms-1",
    "page": "Kinematics/dynamics algorithms",
    "title": "Algorithms",
    "category": "section",
    "text": ""
},

{
    "location": "algorithms.html#Index-1",
    "page": "Kinematics/dynamics algorithms",
    "title": "Index",
    "category": "section",
    "text": "Pages   = [\"algorithms.md\"]\nOrder   = [:type, :function]"
},

{
    "location": "algorithms.html#RigidBodyDynamics.DynamicsResult",
    "page": "Kinematics/dynamics algorithms",
    "title": "RigidBodyDynamics.DynamicsResult",
    "category": "Type",
    "text": "type DynamicsResult{T, M}\n\nStores variables related to the dynamics of a Mechanism, e.g. the Mechanism\'s mass matrix and joint acceleration vector.\n\nType parameters:\n\nT: the scalar type of the dynamics-related variables.\nM: the scalar type of the Mechanism.\n\n\n\n"
},

{
    "location": "algorithms.html#The-DynamicsResult-type-1",
    "page": "Kinematics/dynamics algorithms",
    "title": "The DynamicsResult type",
    "category": "section",
    "text": "DynamicsResult"
},

{
    "location": "algorithms.html#RigidBodyDynamics.Spatial.center_of_mass-Tuple{RigidBodyDynamics.MechanismState,Any}",
    "page": "Kinematics/dynamics algorithms",
    "title": "RigidBodyDynamics.Spatial.center_of_mass",
    "category": "Method",
    "text": "center_of_mass(state, itr)\n\n\nCompute the center of mass of an iterable subset of a Mechanism\'s bodies in the given state. Ignores the root body of the mechanism.\n\n\n\n"
},

{
    "location": "algorithms.html#RigidBodyDynamics.Spatial.center_of_mass-Tuple{RigidBodyDynamics.MechanismState}",
    "page": "Kinematics/dynamics algorithms",
    "title": "RigidBodyDynamics.Spatial.center_of_mass",
    "category": "Method",
    "text": "center_of_mass(state)\n\n\nCompute the center of mass of the whole Mechanism in the given state.\n\n\n\n"
},

{
    "location": "algorithms.html#RigidBodyDynamics.dynamics!-Union{Tuple{RigidBodyDynamics.DynamicsResult,RigidBodyDynamics.MechanismState{X,M,C,JointCollection,MotionSubspaceCollection,WrenchSubspaceCollection} where WrenchSubspaceCollection where MotionSubspaceCollection where JointCollection where C where M,AbstractArray{T,1} where T,Associative{RigidBodyDynamics.BodyID,#s19} where #s19<:RigidBodyDynamics.Spatial.Wrench}, Tuple{RigidBodyDynamics.DynamicsResult,RigidBodyDynamics.MechanismState{X,M,C,JointCollection,MotionSubspaceCollection,WrenchSubspaceCollection} where WrenchSubspaceCollection where MotionSubspaceCollection where JointCollection where C where M,AbstractArray{T,1} where T}, Tuple{RigidBodyDynamics.DynamicsResult,RigidBodyDynamics.MechanismState{X,M,C,JointCollection,MotionSubspaceCollection,WrenchSubspaceCollection} where WrenchSubspaceCollection where MotionSubspaceCollection where JointCollection where C where M}, Tuple{X}} where X",
    "page": "Kinematics/dynamics algorithms",
    "title": "RigidBodyDynamics.dynamics!",
    "category": "Method",
    "text": "dynamics!(result, state)\ndynamics!(result, state, torques)\ndynamics!(result, state, torques, externalwrenches)\n\n\nCompute the joint acceleration vector dotv and Lagrange multipliers lambda that satisfy the joint-space equations of motion\n\nM(q) dotv + c(q v w_textext) = tau - K(q)^T lambda\n\nand the constraint equations\n\nK(q) dotv = -k\n\ngiven joint configuration vector q, joint velocity vector v, and (optionally) joint torques tau and external wrenches w_textext.\n\nThe externalwrenches argument can be used to specify additional wrenches that act on the Mechanism\'s bodies.\n\n\n\n"
},

{
    "location": "algorithms.html#RigidBodyDynamics.dynamics!-Union{Tuple{Union{Base.ReshapedArray{X,1,A,MI} where MI<:Tuple{Vararg{Base.MultiplicativeInverses.SignedMultiplicativeInverse{Int64},N} where N} where A<:Union{DenseArray, SubArray{T,N,P,I,true} where I<:Tuple{Union{Base.Slice, UnitRange},Vararg{Any,N} where N} where P where N where T}, DenseArray{X,1}, SubArray{X,1,A,I,L} where L} where I<:Tuple{Vararg{Union{Base.AbstractCartesianIndex, Int64, Range{Int64}},N} where N} where A<:Union{Base.ReshapedArray{T,N,A,MI} where MI<:Tuple{Vararg{Base.MultiplicativeInverses.SignedMultiplicativeInverse{Int64},N} where N} where A<:Union{DenseArray, SubArray{T,N,P,I,true} where I<:Tuple{Union{Base.Slice, UnitRange},Vararg{Any,N} where N} where P where N where T} where N where T, DenseArray},RigidBodyDynamics.DynamicsResult,RigidBodyDynamics.MechanismState{X,M,C,JointCollection,MotionSubspaceCollection,WrenchSubspaceCollection} where WrenchSubspaceCollection where MotionSubspaceCollection where JointCollection where C where M,AbstractArray{X,1},AbstractArray{T,1} where T,Associative{RigidBodyDynamics.BodyID,#s20} where #s20<:RigidBodyDynamics.Spatial.Wrench}, Tuple{Union{Base.ReshapedArray{X,1,A,MI} where MI<:Tuple{Vararg{Base.MultiplicativeInverses.SignedMultiplicativeInverse{Int64},N} where N} where A<:Union{DenseArray, SubArray{T,N,P,I,true} where I<:Tuple{Union{Base.Slice, UnitRange},Vararg{Any,N} where N} where P where N where T}, DenseArray{X,1}, SubArray{X,1,A,I,L} where L} where I<:Tuple{Vararg{Union{Base.AbstractCartesianIndex, Int64, Range{Int64}},N} where N} where A<:Union{Base.ReshapedArray{T,N,A,MI} where MI<:Tuple{Vararg{Base.MultiplicativeInverses.SignedMultiplicativeInverse{Int64},N} where N} where A<:Union{DenseArray, SubArray{T,N,P,I,true} where I<:Tuple{Union{Base.Slice, UnitRange},Vararg{Any,N} where N} where P where N where T} where N where T, DenseArray},RigidBodyDynamics.DynamicsResult,RigidBodyDynamics.MechanismState{X,M,C,JointCollection,MotionSubspaceCollection,WrenchSubspaceCollection} where WrenchSubspaceCollection where MotionSubspaceCollection where JointCollection where C where M,AbstractArray{X,1},AbstractArray{T,1} where T}, Tuple{Union{Base.ReshapedArray{X,1,A,MI} where MI<:Tuple{Vararg{Base.MultiplicativeInverses.SignedMultiplicativeInverse{Int64},N} where N} where A<:Union{DenseArray, SubArray{T,N,P,I,true} where I<:Tuple{Union{Base.Slice, UnitRange},Vararg{Any,N} where N} where P where N where T}, DenseArray{X,1}, SubArray{X,1,A,I,L} where L} where I<:Tuple{Vararg{Union{Base.AbstractCartesianIndex, Int64, Range{Int64}},N} where N} where A<:Union{Base.ReshapedArray{T,N,A,MI} where MI<:Tuple{Vararg{Base.MultiplicativeInverses.SignedMultiplicativeInverse{Int64},N} where N} where A<:Union{DenseArray, SubArray{T,N,P,I,true} where I<:Tuple{Union{Base.Slice, UnitRange},Vararg{Any,N} where N} where P where N where T} where N where T, DenseArray},RigidBodyDynamics.DynamicsResult,RigidBodyDynamics.MechanismState{X,M,C,JointCollection,MotionSubspaceCollection,WrenchSubspaceCollection} where WrenchSubspaceCollection where MotionSubspaceCollection where JointCollection where C where M,AbstractArray{X,1}}, Tuple{X}} where X",
    "page": "Kinematics/dynamics algorithms",
    "title": "RigidBodyDynamics.dynamics!",
    "category": "Method",
    "text": "dynamics!(ẋ, result, state, state_vec)\ndynamics!(ẋ, result, state, state_vec, torques)\ndynamics!(ẋ, result, state, state_vec, torques, externalwrenches)\n\n\nConvenience function for use with standard ODE integrators that takes a Vector argument\n\nx = left(beginarrayc\nq\nv\nendarrayright)\n\nand returns a Vector dotx.\n\n\n\n"
},

{
    "location": "algorithms.html#RigidBodyDynamics.dynamics_bias!-Union{Tuple{RigidBodyDynamics.CustomCollections.SegmentedVector{RigidBodyDynamics.JointID,T,KeyRange,P} where P<:AbstractArray{T,1} where KeyRange<:Range{RigidBodyDynamics.JointID} where T,Associative{RigidBodyDynamics.BodyID,#s4} where #s4<:RigidBodyDynamics.Spatial.SpatialAcceleration,Associative{RigidBodyDynamics.BodyID,#s3} where #s3<:RigidBodyDynamics.Spatial.Wrench,RigidBodyDynamics.MechanismState{X,M,C,JointCollection,MotionSubspaceCollection,WrenchSubspaceCollection} where WrenchSubspaceCollection where MotionSubspaceCollection where JointCollection where C where M,Associative{RigidBodyDynamics.BodyID,#s2} where #s2<:RigidBodyDynamics.Spatial.Wrench}, Tuple{RigidBodyDynamics.CustomCollections.SegmentedVector{RigidBodyDynamics.JointID,T,KeyRange,P} where P<:AbstractArray{T,1} where KeyRange<:Range{RigidBodyDynamics.JointID} where T,Associative{RigidBodyDynamics.BodyID,#s6} where #s6<:RigidBodyDynamics.Spatial.SpatialAcceleration,Associative{RigidBodyDynamics.BodyID,#s5} where #s5<:RigidBodyDynamics.Spatial.Wrench,RigidBodyDynamics.MechanismState{X,M,C,JointCollection,MotionSubspaceCollection,WrenchSubspaceCollection} where WrenchSubspaceCollection where MotionSubspaceCollection where JointCollection where C where M}, Tuple{X}} where X",
    "page": "Kinematics/dynamics algorithms",
    "title": "RigidBodyDynamics.dynamics_bias!",
    "category": "Method",
    "text": "dynamics_bias!(torques, biasaccelerations, wrenches, state)\ndynamics_bias!(torques, biasaccelerations, wrenches, state, externalwrenches)\n\n\nCompute the \'dynamics bias term\', i.e. the term\n\nc(q v w_textext)\n\nin the unconstrained joint-space equations of motion\n\nM(q) dotv + c(q v w_textext) = tau\n\ngiven joint configuration vector q, joint velocity vector v, joint acceleration vector dotv and (optionally) external wrenches w_textext.\n\nThe externalwrenches argument can be used to specify additional wrenches that act on the Mechanism\'s bodies.\n\nThis method does its computation in place, performing no dynamic memory allocation.\n\n\n\n"
},

{
    "location": "algorithms.html#RigidBodyDynamics.dynamics_bias-Union{Tuple{M}, Tuple{RigidBodyDynamics.MechanismState{X,M,C,JointCollection,MotionSubspaceCollection,WrenchSubspaceCollection} where WrenchSubspaceCollection where MotionSubspaceCollection where JointCollection where C,Associative{RigidBodyDynamics.BodyID,RigidBodyDynamics.Spatial.Wrench{W}}}, Tuple{RigidBodyDynamics.MechanismState{X,M,C,JointCollection,MotionSubspaceCollection,WrenchSubspaceCollection} where WrenchSubspaceCollection where MotionSubspaceCollection where JointCollection where C}, Tuple{W}, Tuple{X}} where W where M where X",
    "page": "Kinematics/dynamics algorithms",
    "title": "RigidBodyDynamics.dynamics_bias",
    "category": "Method",
    "text": "dynamics_bias(state)\ndynamics_bias(state, externalwrenches)\n\n\nCompute the \'dynamics bias term\', i.e. the term\n\nc(q v w_textext)\n\nin the unconstrained joint-space equations of motion\n\nM(q) dotv + c(q v w_textext) = tau\n\ngiven joint configuration vector q, joint velocity vector v, joint acceleration vector dotv and (optionally) external wrenches w_textext.\n\nThe externalwrenches argument can be used to specify additional wrenches that act on the Mechanism\'s bodies.\n\n\n\n"
},

{
    "location": "algorithms.html#RigidBodyDynamics.geometric_jacobian!-Tuple{RigidBodyDynamics.Spatial.GeometricJacobian,RigidBodyDynamics.MechanismState,RigidBodyDynamics.Graphs.TreePath,Any}",
    "page": "Kinematics/dynamics algorithms",
    "title": "RigidBodyDynamics.geometric_jacobian!",
    "category": "Method",
    "text": "geometric_jacobian!(jac, state, path, transformfun)\n\n\nCompute a geometric Jacobian (also known as a basic, or spatial Jacobian) associated with a directed path in the Mechanism\'s spanning tree, (a collection of Joints and traversal directions) in the given state.\n\nA geometric Jacobian maps the Mechanism\'s joint velocity vector v to the twist of the target of the joint path (the body succeeding the last joint in the path) with respect to the source of the joint path (the body preceding the first joint in the path).\n\nSee also path, GeometricJacobian, Twist.\n\ntransformfun is a callable that may be used to transform the individual motion subspaces of each of the joints to the frame in which out is expressed.\n\nThis method does its computation in place, performing no dynamic memory allocation.\n\n\n\n"
},

{
    "location": "algorithms.html#RigidBodyDynamics.geometric_jacobian!-Tuple{RigidBodyDynamics.Spatial.GeometricJacobian,RigidBodyDynamics.MechanismState,RigidBodyDynamics.Graphs.TreePath,RigidBodyDynamics.Spatial.Transform3D}",
    "page": "Kinematics/dynamics algorithms",
    "title": "RigidBodyDynamics.geometric_jacobian!",
    "category": "Method",
    "text": "geometric_jacobian!(out, state, path, root_to_desired)\n\n\nCompute a geometric Jacobian (also known as a basic, or spatial Jacobian) associated with a directed path in the Mechanism\'s spanning tree, (a collection of Joints and traversal directions) in the given state.\n\nA geometric Jacobian maps the Mechanism\'s joint velocity vector v to the twist of the target of the joint path (the body succeeding the last joint in the path) with respect to the source of the joint path (the body preceding the first joint in the path).\n\nSee also path, GeometricJacobian, Twist.\n\nroot_to_desired is the transform from the Mechanism\'s root frame to the frame in which out is expressed.\n\nThis method does its computation in place, performing no dynamic memory allocation.\n\n\n\n"
},

{
    "location": "algorithms.html#RigidBodyDynamics.geometric_jacobian!-Tuple{RigidBodyDynamics.Spatial.GeometricJacobian,RigidBodyDynamics.MechanismState,RigidBodyDynamics.Graphs.TreePath}",
    "page": "Kinematics/dynamics algorithms",
    "title": "RigidBodyDynamics.geometric_jacobian!",
    "category": "Method",
    "text": "geometric_jacobian!(out, state, path)\n\n\nCompute a geometric Jacobian (also known as a basic, or spatial Jacobian) associated with a directed path in the Mechanism\'s spanning tree, (a collection of Joints and traversal directions) in the given state.\n\nA geometric Jacobian maps the Mechanism\'s joint velocity vector v to the twist of the target of the joint path (the body succeeding the last joint in the path) with respect to the source of the joint path (the body preceding the first joint in the path).\n\nSee also path, GeometricJacobian, Twist.\n\nSee geometric_jacobian!(out, state, path, root_to_desired). Uses state to compute the transform from the Mechanism\'s root frame to the frame in which out is expressed.\n\nThis method does its computation in place, performing no dynamic memory allocation.\n\n\n\n"
},

{
    "location": "algorithms.html#RigidBodyDynamics.geometric_jacobian-Union{Tuple{C}, Tuple{M}, Tuple{RigidBodyDynamics.MechanismState{X,M,C,JointCollection,MotionSubspaceCollection,WrenchSubspaceCollection} where WrenchSubspaceCollection where MotionSubspaceCollection where JointCollection,RigidBodyDynamics.Graphs.TreePath{RigidBodyDynamics.RigidBody{M},RigidBodyDynamics.Joint{M,JT} where JT<:RigidBodyDynamics.JointType{M}}}, Tuple{X}} where C where M where X",
    "page": "Kinematics/dynamics algorithms",
    "title": "RigidBodyDynamics.geometric_jacobian",
    "category": "Method",
    "text": "geometric_jacobian(state, path)\n\n\nCompute a geometric Jacobian (also known as a basic, or spatial Jacobian) associated with a directed path in the Mechanism\'s spanning tree, (a collection of Joints and traversal directions) in the given state.\n\nA geometric Jacobian maps the Mechanism\'s joint velocity vector v to the twist of the target of the joint path (the body succeeding the last joint in the path) with respect to the source of the joint path (the body preceding the first joint in the path).\n\nSee also path, GeometricJacobian, Twist.\n\nThe Jacobian is computed in the Mechanism\'s root frame.\n\nSee geometric_jacobian!(out, state, path).\n\n\n\n"
},

{
    "location": "algorithms.html#RigidBodyDynamics.inverse_dynamics!-Union{Tuple{RigidBodyDynamics.CustomCollections.SegmentedVector{RigidBodyDynamics.JointID,T,KeyRange,P} where P<:AbstractArray{T,1} where KeyRange<:Range{RigidBodyDynamics.JointID} where T,Associative{RigidBodyDynamics.BodyID,RigidBodyDynamics.Spatial.Wrench{T}},Associative{RigidBodyDynamics.BodyID,RigidBodyDynamics.Spatial.SpatialAcceleration{T}},RigidBodyDynamics.MechanismState,RigidBodyDynamics.CustomCollections.SegmentedVector{RigidBodyDynamics.JointID,T,KeyRange,P} where P<:AbstractArray{T,1} where KeyRange<:Range{RigidBodyDynamics.JointID} where T,Associative{RigidBodyDynamics.BodyID,#s20} where #s20<:RigidBodyDynamics.Spatial.Wrench}, Tuple{RigidBodyDynamics.CustomCollections.SegmentedVector{RigidBodyDynamics.JointID,T,KeyRange,P} where P<:AbstractArray{T,1} where KeyRange<:Range{RigidBodyDynamics.JointID} where T,Associative{RigidBodyDynamics.BodyID,RigidBodyDynamics.Spatial.Wrench{T}},Associative{RigidBodyDynamics.BodyID,RigidBodyDynamics.Spatial.SpatialAcceleration{T}},RigidBodyDynamics.MechanismState,RigidBodyDynamics.CustomCollections.SegmentedVector{RigidBodyDynamics.JointID,T,KeyRange,P} where P<:AbstractArray{T,1} where KeyRange<:Range{RigidBodyDynamics.JointID} where T}, Tuple{T}} where T",
    "page": "Kinematics/dynamics algorithms",
    "title": "RigidBodyDynamics.inverse_dynamics!",
    "category": "Method",
    "text": "inverse_dynamics!(torquesout, jointwrenchesout, accelerations, state, v̇)\ninverse_dynamics!(torquesout, jointwrenchesout, accelerations, state, v̇, externalwrenches)\n\n\nDo inverse dynamics, i.e. compute tau in the unconstrained joint-space equations of motion\n\nM(q) dotv + c(q v w_textext) = tau\n\ngiven joint configuration vector q, joint velocity vector v, joint acceleration vector dotv and (optionally) external wrenches w_textext.\n\nThe externalwrenches argument can be used to specify additional wrenches that act on the Mechanism\'s bodies.\n\nThis method implements the recursive Newton-Euler algorithm.\n\nCurrently doesn\'t support Mechanisms with cycles.\n\nThis method does its computation in place, performing no dynamic memory allocation.\n\n\n\n"
},

{
    "location": "algorithms.html#RigidBodyDynamics.inverse_dynamics-Union{Tuple{M}, Tuple{RigidBodyDynamics.MechanismState{X,M,C,JointCollection,MotionSubspaceCollection,WrenchSubspaceCollection} where WrenchSubspaceCollection where MotionSubspaceCollection where JointCollection where C,RigidBodyDynamics.CustomCollections.SegmentedVector{RigidBodyDynamics.JointID,V,KeyRange,P} where P<:AbstractArray{V,1} where KeyRange<:Range{RigidBodyDynamics.JointID},Associative{RigidBodyDynamics.BodyID,RigidBodyDynamics.Spatial.Wrench{W}}}, Tuple{RigidBodyDynamics.MechanismState{X,M,C,JointCollection,MotionSubspaceCollection,WrenchSubspaceCollection} where WrenchSubspaceCollection where MotionSubspaceCollection where JointCollection where C,RigidBodyDynamics.CustomCollections.SegmentedVector{RigidBodyDynamics.JointID,V,KeyRange,P} where P<:AbstractArray{V,1} where KeyRange<:Range{RigidBodyDynamics.JointID}}, Tuple{V}, Tuple{W}, Tuple{X}} where W where V where M where X",
    "page": "Kinematics/dynamics algorithms",
    "title": "RigidBodyDynamics.inverse_dynamics",
    "category": "Method",
    "text": "inverse_dynamics(state, v̇)\ninverse_dynamics(state, v̇, externalwrenches)\n\n\nDo inverse dynamics, i.e. compute tau in the unconstrained joint-space equations of motion\n\nM(q) dotv + c(q v w_textext) = tau\n\ngiven joint configuration vector q, joint velocity vector v, joint acceleration vector dotv and (optionally) external wrenches w_textext.\n\nThe externalwrenches argument can be used to specify additional wrenches that act on the Mechanism\'s bodies.\n\nThis method implements the recursive Newton-Euler algorithm.\n\nCurrently doesn\'t support Mechanisms with cycles.\n\n\n\n"
},

{
    "location": "algorithms.html#RigidBodyDynamics.mass-Tuple{RigidBodyDynamics.Mechanism}",
    "page": "Kinematics/dynamics algorithms",
    "title": "RigidBodyDynamics.mass",
    "category": "Method",
    "text": "mass(m)\n\n\nReturn the total mass of the Mechanism.\n\n\n\n"
},

{
    "location": "algorithms.html#RigidBodyDynamics.mass_matrix!-Tuple{Symmetric,RigidBodyDynamics.MechanismState}",
    "page": "Kinematics/dynamics algorithms",
    "title": "RigidBodyDynamics.mass_matrix!",
    "category": "Method",
    "text": "mass_matrix!(M, state)\n\n\nCompute the joint-space mass matrix (also known as the inertia matrix) of the Mechanism in the given state, i.e., the matrix M(q) in the unconstrained joint-space equations of motion\n\nM(q) dotv + c(q v w_textext) = tau\n\nThis method implements the composite rigid body algorithm.\n\nThis method does its computation in place, performing no dynamic memory allocation.\n\nThe out argument must be an n_v times n_v lower triangular Symmetric matrix, where n_v is the dimension of the Mechanism\'s joint velocity vector v.\n\n\n\n"
},

{
    "location": "algorithms.html#RigidBodyDynamics.mass_matrix-Union{Tuple{C}, Tuple{M}, Tuple{RigidBodyDynamics.MechanismState{X,M,C,JointCollection,MotionSubspaceCollection,WrenchSubspaceCollection} where WrenchSubspaceCollection where MotionSubspaceCollection where JointCollection}, Tuple{X}} where C where M where X",
    "page": "Kinematics/dynamics algorithms",
    "title": "RigidBodyDynamics.mass_matrix",
    "category": "Method",
    "text": "mass_matrix(state)\n\n\nCompute the joint-space mass matrix (also known as the inertia matrix) of the Mechanism in the given state, i.e., the matrix M(q) in the unconstrained joint-space equations of motion\n\nM(q) dotv + c(q v w_textext) = tau\n\nThis method implements the composite rigid body algorithm.\n\n\n\n"
},

{
    "location": "algorithms.html#RigidBodyDynamics.momentum_matrix!-Tuple{RigidBodyDynamics.Spatial.MomentumMatrix,RigidBodyDynamics.MechanismState,Any}",
    "page": "Kinematics/dynamics algorithms",
    "title": "RigidBodyDynamics.momentum_matrix!",
    "category": "Method",
    "text": "momentum_matrix!(out, state, transformfun)\n\n\nCompute the momentum matrix A(q) of the Mechanism in the given state.\n\nThe momentum matrix maps the Mechanism\'s joint velocity vector v to its total momentum.\n\nSee also MomentumMatrix.\n\nThe out argument must be a mutable MomentumMatrix with as many columns as the dimension of the Mechanism\'s joint velocity vector v.\n\ntransformfun is a callable that may be used to transform the individual momentum matrix blocks associated with each of the joints to the frame in which out is expressed.\n\nThis method does its computation in place, performing no dynamic memory allocation.\n\n\n\n"
},

{
    "location": "algorithms.html#RigidBodyDynamics.momentum_matrix!-Tuple{RigidBodyDynamics.Spatial.MomentumMatrix,RigidBodyDynamics.MechanismState,RigidBodyDynamics.Spatial.Transform3D}",
    "page": "Kinematics/dynamics algorithms",
    "title": "RigidBodyDynamics.momentum_matrix!",
    "category": "Method",
    "text": "momentum_matrix!(out, state, root_to_desired)\n\n\nCompute the momentum matrix A(q) of the Mechanism in the given state.\n\nThe momentum matrix maps the Mechanism\'s joint velocity vector v to its total momentum.\n\nSee also MomentumMatrix.\n\nThe out argument must be a mutable MomentumMatrix with as many columns as the dimension of the Mechanism\'s joint velocity vector v.\n\nroot_to_desired is the transform from the Mechanism\'s root frame to the frame in which out is expressed.\n\nThis method does its computation in place, performing no dynamic memory allocation.\n\n\n\n"
},

{
    "location": "algorithms.html#RigidBodyDynamics.momentum_matrix!-Tuple{RigidBodyDynamics.Spatial.MomentumMatrix,RigidBodyDynamics.MechanismState}",
    "page": "Kinematics/dynamics algorithms",
    "title": "RigidBodyDynamics.momentum_matrix!",
    "category": "Method",
    "text": "momentum_matrix!(out, state)\n\n\nCompute the momentum matrix A(q) of the Mechanism in the given state.\n\nThe momentum matrix maps the Mechanism\'s joint velocity vector v to its total momentum.\n\nSee also MomentumMatrix.\n\nThe out argument must be a mutable MomentumMatrix with as many columns as the dimension of the Mechanism\'s joint velocity vector v.\n\nSee momentum_matrix!(out, state, root_to_desired). Uses state to compute the transform from the Mechanism\'s root frame to the frame in which out is expressed.\n\nThis method does its computation in place, performing no dynamic memory allocation.\n\n\n\n"
},

{
    "location": "algorithms.html#RigidBodyDynamics.momentum_matrix-Tuple{RigidBodyDynamics.MechanismState}",
    "page": "Kinematics/dynamics algorithms",
    "title": "RigidBodyDynamics.momentum_matrix",
    "category": "Method",
    "text": "momentum_matrix(state)\n\n\nCompute the momentum matrix A(q) of the Mechanism in the given state.\n\nThe momentum matrix maps the Mechanism\'s joint velocity vector v to its total momentum.\n\nSee also MomentumMatrix.\n\nSee momentum_matrix!(out, state).\n\n\n\n"
},

{
    "location": "algorithms.html#RigidBodyDynamics.subtree_mass-Union{Tuple{RigidBodyDynamics.RigidBody{T},RigidBodyDynamics.Mechanism{T}}, Tuple{T}} where T",
    "page": "Kinematics/dynamics algorithms",
    "title": "RigidBodyDynamics.subtree_mass",
    "category": "Method",
    "text": "subtree_mass(base, mechanism)\n\n\nReturn the mass of a subtree of a Mechanism, rooted at base (including the mass of base).\n\n\n\n"
},

{
    "location": "algorithms.html#Functions-1",
    "page": "Kinematics/dynamics algorithms",
    "title": "Functions",
    "category": "section",
    "text": "Modules = [RigidBodyDynamics]\nOrder   = [:function]\nPages   = [\"mechanism_algorithms.jl\"]"
},

{
    "location": "customcollections.html#",
    "page": "Custom collection types",
    "title": "Custom collection types",
    "category": "page",
    "text": ""
},

{
    "location": "customcollections.html#Custom-collection-types-1",
    "page": "Custom collection types",
    "title": "Custom collection types",
    "category": "section",
    "text": ""
},

{
    "location": "customcollections.html#Index-1",
    "page": "Custom collection types",
    "title": "Index",
    "category": "section",
    "text": "Pages   = [\"customcollections.md\"]\nOrder   = [:type, :function]"
},

{
    "location": "customcollections.html#RigidBodyDynamics.CustomCollections.CacheIndexDict",
    "page": "Custom collection types",
    "title": "RigidBodyDynamics.CustomCollections.CacheIndexDict",
    "category": "Type",
    "text": "type CacheIndexDict{K, KeyRange<:AbstractUnitRange{K}, V} <: RigidBodyDynamics.CustomCollections.AbstractIndexDict{K,V}\n\nLike IndexDict, but contains an additional Bool dirty bit to be used in algorithms involving cached data.\n\n\n\n"
},

{
    "location": "customcollections.html#RigidBodyDynamics.CustomCollections.ConstVector",
    "page": "Custom collection types",
    "title": "RigidBodyDynamics.CustomCollections.ConstVector",
    "category": "Type",
    "text": "struct ConstVector{T} <: AbstractArray{T,1}\n\nAn immutable AbstractVector for which all elements are the same, represented compactly and as an isbits type if the element type is isbits.\n\n\n\n"
},

{
    "location": "customcollections.html#RigidBodyDynamics.CustomCollections.DiscardVector",
    "page": "Custom collection types",
    "title": "RigidBodyDynamics.CustomCollections.DiscardVector",
    "category": "Type",
    "text": "bitstype 64 DiscardVector <: AbstractArray{Any,1}\n\nDiscardVector is an AbstractVector whose setindex! simply discards the value. This is useful for broadcast! calls where the output of the broadcasted function is not interesting, specifically when the broadcasted function is in-place and there are arguments that need to be treated as scalars, so that a simple foreach doesn\'t do the job.\n\n\n\n"
},

{
    "location": "customcollections.html#RigidBodyDynamics.CustomCollections.IndexDict",
    "page": "Custom collection types",
    "title": "RigidBodyDynamics.CustomCollections.IndexDict",
    "category": "Type",
    "text": "struct IndexDict{K, KeyRange<:AbstractUnitRange{K}, V} <: RigidBodyDynamics.CustomCollections.AbstractIndexDict{K,V}\n\nAn associative type whose keys are an AbstractUnitRange, and whose values are stored in a Vector. IndexDict is an ordered associative collection, with the order determined by key range. The nature of the keys enables very fast lookups and stores.\n\nExamples\n\njulia> IndexDict(2 : 4, [4, 5, 6])\nRigidBodyDynamics.CustomCollections.IndexDict{Int64,UnitRange{Int64},Int64} with 3 entries:\n  2 => 4\n  3 => 5\n  4 => 6\n\njulia> IndexDict{Int32, UnitRange{Int32}}(i => 3 * i for i in Int32[4, 2, 3])\nRigidBodyDynamics.CustomCollections.IndexDict{Int32,UnitRange{Int32},Int64} with 3 entries:\n  2 => 6\n  3 => 9\n  4 => 12\n\n\n\n"
},

{
    "location": "customcollections.html#RigidBodyDynamics.CustomCollections.NullDict",
    "page": "Custom collection types",
    "title": "RigidBodyDynamics.CustomCollections.NullDict",
    "category": "Type",
    "text": "struct NullDict{K, V} <: Associative{K,V}\n\nAn immutable associative type that signifies an empty dictionary and does not allocate any memory.\n\n\n\n"
},

{
    "location": "customcollections.html#RigidBodyDynamics.CustomCollections.SegmentedVector",
    "page": "Custom collection types",
    "title": "RigidBodyDynamics.CustomCollections.SegmentedVector",
    "category": "Type",
    "text": "struct SegmentedVector{K, T, KeyRange<:Range{K}, P<:AbstractArray{T,1}} <: AbstractArray{T,1}\n\nSegmentedVector is an AbstractVector backed by another AbstractVector (its parent), which additionally stores an IndexDict containing views into the parent. Together, these views cover the parent.\n\nExamples\n\njulia> x = [1., 2., 3., 4.]\n4-element Array{Float64,1}:\n 1.0\n 2.0\n 3.0\n 4.0\n\njulia> viewlength(i) = 2\nviewlength (generic function with 1 method)\n\njulia> xseg = SegmentedVector{Int}(x, 1 : 2, viewlength)\n4-element RigidBodyDynamics.CustomCollections.SegmentedVector{Int64,Float64,Base.OneTo{Int64},Array{Float64,1}}:\n 1.0\n 2.0\n 3.0\n 4.0\n\njulia> segments(xseg)[1]\n2-element SubArray{Float64,1,Array{Float64,1},Tuple{UnitRange{Int64}},true}:\n 1.0\n 2.0\n\njulia> yseg = similar(xseg, Int32); yseg .= 1 : 4 # same view ranges, different element type\n4-element RigidBodyDynamics.CustomCollections.SegmentedVector{Int64,Int32,Base.OneTo{Int64},Array{Int32,1}}:\n 1\n 2\n 3\n 4\n\njulia> segments(yseg)[2]\n2-element SubArray{Int32,1,Array{Int32,1},Tuple{UnitRange{Int64}},true}:\n 3\n 4\n\n\n\n"
},

{
    "location": "customcollections.html#Types-1",
    "page": "Custom collection types",
    "title": "Types",
    "category": "section",
    "text": "Modules = [RigidBodyDynamics.CustomCollections]\nOrder   = [:type, :function]\nPages   = [\"custom_collections.jl\"]"
},

{
    "location": "statecache.html#",
    "page": "StateCache",
    "title": "StateCache",
    "category": "page",
    "text": ""
},

{
    "location": "statecache.html#RigidBodyDynamics.StateCache",
    "page": "StateCache",
    "title": "RigidBodyDynamics.StateCache",
    "category": "Type",
    "text": "struct StateCache{M, JointCollection}\n\nA container that manages the creation and storage of MechanismState objects of various scalar types, associated with a given Mechanism.\n\nA StateCache can be used to write generic functions that use MechanismState objects, while avoiding overhead due to the construction of a new MechanismState with a given scalar type every time the function is called.\n\nExamples\n\njulia> mechanism = rand_tree_mechanism(Float64, Revolute{Float64}, Prismatic{Float64}, QuaternionFloating{Float64});\n\njulia> cache = StateCache(mechanism)\nStateCache{…}\n\njulia> state32 = cache[Float32]\nMechanismState{Float32, Float64, Float64, …}(…)\n\njulia> cache[Float32] === state32\ntrue\n\njulia> cache[Float64]\nMechanismState{Float64, Float64, Float64, …}(…)\n\n\n\n"
},

{
    "location": "statecache.html#StateCache-1",
    "page": "StateCache",
    "title": "StateCache",
    "category": "section",
    "text": "StateCache"
},

{
    "location": "simulation.html#",
    "page": "Simulation",
    "title": "Simulation",
    "category": "page",
    "text": ""
},

{
    "location": "simulation.html#Simulation-1",
    "page": "Simulation",
    "title": "Simulation",
    "category": "section",
    "text": ""
},

{
    "location": "simulation.html#Index-1",
    "page": "Simulation",
    "title": "Index",
    "category": "section",
    "text": "Pages   = [\"simulation.md\"]\nOrder   = [:type, :function]"
},

{
    "location": "simulation.html#RigidBodyDynamics.simulate",
    "page": "Simulation",
    "title": "RigidBodyDynamics.simulate",
    "category": "Function",
    "text": "simulate(state0, final_time)\nsimulate(state0, final_time, control!; Δt)\n\n\nBasic Mechanism simulation: integrate the state from time 0 to final_time starting from the initial state state0. Return a Vector of times, as well as Vectors of configuration vectors and velocity vectors at these times.\n\nOptionally, a function (or other callable) can be passed in as the third argument (control!). control! will be called at each time step of the simulation and allows you to specify joint torques given the time and the state of the Mechanism. It should look like this:\n\nfunction control!(torques::AbstractVector, t, state::MechanismState)\n    rand!(torques) # for example\nend\n\nThe integration time step can be specified using the Δt keyword argument (defaults to 1e-4).\n\nUses MuntheKaasIntegrator. See RigidBodyDynamics.OdeIntegrators.MuntheKaasIntegrator for a lower level interface with more options.\n\n\n\n"
},

{
    "location": "simulation.html#Basic-simulation-1",
    "page": "Simulation",
    "title": "Basic simulation",
    "category": "section",
    "text": "simulate"
},

{
    "location": "simulation.html#RigidBodyDynamics.OdeIntegrators.MuntheKaasIntegrator",
    "page": "Simulation",
    "title": "RigidBodyDynamics.OdeIntegrators.MuntheKaasIntegrator",
    "category": "Type",
    "text": "A Lie-group-aware ODE integrator.\n\nMuntheKaasIntegrator is used to properly integrate the dynamics of globally parameterized rigid joints (Duindam, Port-Based Modeling and Control for Efficient Bipedal Walking Robots, 2006, Definition 2.9). Global parameterizations of e.g. SO(3) are needed to avoid singularities, but this leads to the problem that the tangent space no longer has the same dimension as the ambient space of the global parameterization. A Munthe-Kaas integrator solves this problem by converting back and forth between local and global coordinates at every integration time step.\n\nThe idea is to do the dynamics and compute the stages of the integration scheme in terms of local coordinates centered around the global parameterization of the configuration at the end of the previous time step (e.g. exponential coordinates), combine the stages into a new set of local coordinates as usual for Runge-Kutta methods, and then convert the local coordinates back to global coordinates.\n\nFrom Iserles et al., \'Lie-group methods\' (2000).\n\nAnother useful reference is Park and Chung, \'Geometric Integration on Euclidean Group with Application to Articulated Multibody Systems\' (2005).\n\n\n\n"
},

{
    "location": "simulation.html#RigidBodyDynamics.OdeIntegrators.ButcherTableau",
    "page": "Simulation",
    "title": "RigidBodyDynamics.OdeIntegrators.ButcherTableau",
    "category": "Type",
    "text": "struct ButcherTableau{N, T, L}\n\nA Butcher tableau.\n\n\n\n"
},

{
    "location": "simulation.html#RigidBodyDynamics.OdeIntegrators.OdeResultsSink",
    "page": "Simulation",
    "title": "RigidBodyDynamics.OdeIntegrators.OdeResultsSink",
    "category": "Type",
    "text": "abstract OdeResultsSink\n\nDoes \'something\' with the results of an ODE integration (e.g. storing results, visualizing, etc.). Subtypes must implement:\n\ninitialize(sink, state): called with the initial state when integration begins.\nprocess(sink, t, state): called at every integration time step with the current state and time.\n\n\n\n"
},

{
    "location": "simulation.html#RigidBodyDynamics.OdeIntegrators.RingBufferStorage",
    "page": "Simulation",
    "title": "RigidBodyDynamics.OdeIntegrators.RingBufferStorage",
    "category": "Type",
    "text": "type RingBufferStorage{T, Q<:(AbstractArray{T,1} where T), V<:(AbstractArray{T,1} where T)} <: RigidBodyDynamics.OdeIntegrators.OdeResultsSink\n\nAn OdeResultsSink that stores the state at each integration time step in a ring buffer.\n\n\n\n"
},

{
    "location": "simulation.html#RigidBodyDynamics.OdeIntegrators.ExpandingStorage",
    "page": "Simulation",
    "title": "RigidBodyDynamics.OdeIntegrators.ExpandingStorage",
    "category": "Type",
    "text": "type ExpandingStorage{T, Q<:(AbstractArray{T,1} where T), V<:(AbstractArray{T,1} where T)} <: RigidBodyDynamics.OdeIntegrators.OdeResultsSink\n\nAn OdeResultsSink that stores the state at each integration time step in Vectors that may expand.\n\n\n\n"
},

{
    "location": "simulation.html#RigidBodyDynamics.OdeIntegrators.integrate-Tuple{RigidBodyDynamics.OdeIntegrators.MuntheKaasIntegrator,Any,Any}",
    "page": "Simulation",
    "title": "RigidBodyDynamics.OdeIntegrators.integrate",
    "category": "Method",
    "text": "integrate(integrator, final_time, Δt; max_realtime_rate)\n\n\nIntegrate dynamics from the initial state at time 0 to final_time using step size Δt.\n\n\n\n"
},

{
    "location": "simulation.html#RigidBodyDynamics.OdeIntegrators.runge_kutta_4-Union{Tuple{Type{T}}, Tuple{T}} where T",
    "page": "Simulation",
    "title": "RigidBodyDynamics.OdeIntegrators.runge_kutta_4",
    "category": "Method",
    "text": "runge_kutta_4(scalartype)\n\n\nReturn the Butcher tableau for the standard fourth order Runge-Kutta integrator.\n\n\n\n"
},

{
    "location": "simulation.html#RigidBodyDynamics.OdeIntegrators.step-Tuple{RigidBodyDynamics.OdeIntegrators.MuntheKaasIntegrator,Real,Real}",
    "page": "Simulation",
    "title": "RigidBodyDynamics.OdeIntegrators.step",
    "category": "Method",
    "text": "step(integrator, t, Δt)\n\n\nTake a single integration step.\n\n\n\n"
},

{
    "location": "simulation.html#Lower-level-ODE-integration-interface-1",
    "page": "Simulation",
    "title": "Lower level ODE integration interface",
    "category": "section",
    "text": "MuntheKaasIntegrator\nButcherTableau\nOdeResultsSink\nRingBufferStorage\nExpandingStorageModules = [RigidBodyDynamics.OdeIntegrators]\nOrder   = [:function]\nPages   = [\"ode_integrators.jl\"]"
},

{
    "location": "benchmarks.html#",
    "page": "Benchmarks",
    "title": "Benchmarks",
    "category": "page",
    "text": ""
},

{
    "location": "benchmarks.html#Benchmarks-1",
    "page": "Benchmarks",
    "title": "Benchmarks",
    "category": "section",
    "text": "To get maximal performance, it is recommended to:Rebuild the Julia system image for your CPU architecture\nPass -O3, --check-bounds=no, and --math-mode=fast as command line flags to julia.Run perf/runbenchmarks.jl to see benchmark results for the Atlas robot (v5) in the following scenarios:Compute the joint-space mass matrix.\nCompute both the mass matrix and a geometric Jacobian from the left hand to the right foot.\nDo inverse dynamics.\nDo forward dynamics.Note that results on Travis builds are not at all representative because of code coverage. Results on a reasonably fast machine at commit 8f70a47bcd:Output of versioninfo():Julia Version 0.6.2\nCommit d386e40c17 (2017-12-13 18:08 UTC)\nPlatform Info:\n  OS: Linux (x86_64-pc-linux-gnu)\n  CPU: Intel(R) Core(TM) i7-6950X CPU @ 3.00GHz\n  WORD_SIZE: 64\n  BLAS: libopenblas (USE64BITINT DYNAMIC_ARCH NO_AFFINITY Haswell)\n  LAPACK: libopenblas64_\n  LIBM: libopenlibm\n  LLVM: libLLVM-3.9.1 (ORCJIT, broadwell)Mass matrix:  memory estimate:  0 bytes\n  allocs estimate:  0\n  --------------\n  minimum time:     9.697 μs (0.00% GC)\n  median time:      10.003 μs (0.00% GC)\n  mean time:        10.076 μs (0.00% GC)\n  maximum time:     47.473 μs (0.00% GC)Mass matrix and Jacobian from left hand to right foot:  memory estimate:  0 bytes\n  allocs estimate:  0\n  --------------\n  minimum time:     10.426 μs (0.00% GC)\n  median time:      10.737 μs (0.00% GC)\n  mean time:        10.754 μs (0.00% GC)\n  maximum time:     49.830 μs (0.00% GC)Note the low additional cost of computing a Jacobian when the mass matrix is already computed. This is because RigidBodyDynamics.jl caches intermediate computation results.Inverse dynamics:  memory estimate:  0 bytes\n  allocs estimate:  0\n  --------------\n  minimum time:     10.988 μs (0.00% GC)\n  median time:      11.294 μs (0.00% GC)\n  mean time:        11.383 μs (0.00% GC)\n  maximum time:     33.164 μs (0.00% GC)Forward dynamics:  memory estimate:  64 bytes\n  allocs estimate:  3\n  --------------\n  minimum time:     39.481 μs (0.00% GC)\n  median time:      54.874 μs (0.00% GC)\n  mean time:        55.230 μs (0.00% GC)\n  maximum time:     594.235 μs (0.00% GC)"
},

]}